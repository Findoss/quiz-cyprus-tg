import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';

declare global {
  interface Window {
    Telegram: any;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

setTimeout(() => {
  window.Telegram.WebApp.expand();
}, 2000);
