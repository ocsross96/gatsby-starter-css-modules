import React from 'react';
import Link from 'gatsby-link';

import Button from 'rp-react-components/src/components/Button';

const IndexPage = () => (
  <div>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <br />
    <Button size="small">Test</Button>
  </div>
);

export default IndexPage;
