import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { TG } from './libs/telegram';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (!TG.WebApp.isExpanded) {
  TG.WebApp.expand();
}
