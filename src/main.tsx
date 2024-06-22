import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import { TG } from './libs/telegram';
import { GTM } from './libs/google-gtm';

import './index.css';
import { ENV } from './libs/env';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (!TG.WebApp.isExpanded) {
  TG.WebApp.expand();
}

if (!ENV.DEV) {
  GTM.init({
    code: 'G-X5R9R07QTD',
    debug: false,
    performance: false,
  });
}
