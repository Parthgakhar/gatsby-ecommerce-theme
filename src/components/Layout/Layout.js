import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Header from '../Header';
import Footer from '../Footer';
import * as styles from './Layout.module.css';

// CSS not modular here to provide global styles
import './Globals.css';

const Layout = ({ props, children, disablePaddingBottom = false }) => {
  return (
    <>
      <Helmet>
        {/* Add any sitewide scripts here */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
      </Helmet>
      <Header />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WMFD6FWH"
          height="0"
          width="0"
          styles="display:none;visibility:hidden"
        ></iframe>
      </noscript>
      <main
        className={`${styles.main} ${
          disablePaddingBottom === true ? styles.disablePaddingBottom : ''
        }`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

