import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import styles from "./header.module.scss";

const propTypes = {
  siteTitle: PropTypes.string
};

// TODO: remove siteTitle when we decide it is not needed
const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'black',
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className={styles.base}
          style={{
            textDecoration: 'none'
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

Header.propTypes = propTypes;

export default Header;
