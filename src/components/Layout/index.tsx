import React, { Fragment } from 'react';
import Banner from '../Banner';

import './style.css';

export const LayoutMain = ({ header, body, footer }) => {
  return (
    <Fragment>
      <Banner />
      <div className="container">
        <div className="header"> {header}</div>
        <div className="body"> {body}</div>
        <div className="footer"> {footer}</div>
      </div>
    </Fragment>
  );
};
