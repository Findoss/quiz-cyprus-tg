import React, { Fragment } from 'react';
import Banner from '../Banner';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Banner />
      <div style={{ bottom: 0, position: 'absolute' }}>
        <main>{children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
