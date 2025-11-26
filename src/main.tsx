import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import globalStyles from './globals.css?inline';

const injectGlobalStyles = () => {
  if (document.head.querySelector('style[data-app-global]')) return;
  const styleTag = document.createElement('style');
  styleTag.setAttribute('data-app-global', 'true');
  styleTag.textContent = globalStyles;
  document.head.appendChild(styleTag);
};

injectGlobalStyles();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);