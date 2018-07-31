import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.object
};

const CostGuide = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

CostGuide.propTypes = propTypes;

export default CostGuide;

// eslint-disable-next-line no-undef
export const query = graphql`
  query CostGuideQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
