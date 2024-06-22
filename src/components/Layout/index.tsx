import React, { Fragment } from 'react';
import Banner from '../Banner';
import { Container } from 'semantic-ui-react';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Banner />
      <Container>{children}</Container>
    </Fragment>
  );
};

export default Layout;
