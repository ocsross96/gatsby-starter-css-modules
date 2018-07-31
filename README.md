# __cost-guides__
Cost guides project using Gatsby.

## __Project structure__

For a general overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## __Components__

rp-react-components is a dependency of this project and we use these where possible, to use a component you can import as follows:

```sh
import Button from 'rp-react-components/src/components/Button';
```
## __CSS__

CSS is setup identically to our other projects such as rp-react-components. This supports css and sass using css modules and postcss.

## __Commands__

You may find it helpful to have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

You can then run the different build stages from the CLI:
```sh
gatsby develop
```

```sh
gatsby build
```
Alternatively you can simply run via npm:

```sh
npm run develop
```
```sh
npm run build
```

If using mac I find it helpful to quickly spin up a local python HTTP server when checking the output of the build command which gets output to the /public folder:

```sh
cd public
python -m SimpleHTTPServer
```

## __Debugging__
```sh
npm run develop:debug
```
Now visit chrome://inspect to start debugging using Node inspector:

## __GraphQL__

Upon running the project in develop mode Gatsby spins up an instance of GraphiQL an in-browser IDE to explore your site's data and schema. See the following resources for more info:

https://www.gatsbyjs.org/docs/querying-with-graphql/  
https://www.gatsbyjs.org/docs/graphql-reference/

### __Resources__
| RESOURCE | LINK |
| ------ | ------ |
| Gatsby | https://www.gatsbyjs.org/ |