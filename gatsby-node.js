const path = require('path');
const generateBabelConfig = require('gatsby/dist/utils/babel-config');
const { createFilePath } = require('gatsby-source-filesystem');

exports.modifyWebpackConfig = async ({ config, stage }) => {
  const program = {
    directory: __dirname,
    browserslist: ['> 1%', 'last 2 versions', 'IE >= 9']
  };

  try {
    const babelConfig = await generateBabelConfig(program, stage);

    config.removeLoader('js');
    config.loader('js', {
      test: /\.jsx?$/,
      exclude: (modulePath) => {
        return (
          /node_modules/.test(modulePath) &&
          !/node_modules\/(rp-react-components|lodash-es)/.test(modulePath)
        );
      },
      loader: 'babel',
      query: babelConfig
    });
    return config;

  } catch (err) {
    console.log(err);
    return config;
  }
};

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
};

exports.createPages = async ({ graphql, boundActionCreators }, pluginOptions, cb) => {
  const { createPage } = boundActionCreators;

  try {
    const result = await graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/costGuide.js`),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          slug: node.fields.slug
        }
      });
    });
    cb();

  } catch (err) {
    console.log(err);
    cb();
  }
};
