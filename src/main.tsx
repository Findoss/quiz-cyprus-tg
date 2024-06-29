import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app';
import { TG } from './libs/telegram';
import { GTM } from './libs/google-gtm';
import { ENV } from './libs/env';
import { SENTRY } from './libs/sentry';

import './index.css';

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

if (!ENV.DEV) {
  SENTRY.init({
    dsn: 'https://4f27f86c5aa3b7efcd0dfed09c239f80@o4507474731466752.ingest.de.sentry.io/4507474741624912',
    integrations: [
      SENTRY.browserTracingIntegration(),
      SENTRY.replayIntegration(),
    ],
    denyUrls: [/extensions\//i, /^chrome:\/\//i, /graph\.facebook\.com/i],
    tracesSampleRate: 1.0,
    tracePropagationTargets: ['localhost'],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });
}
