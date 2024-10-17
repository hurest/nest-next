import * as React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';

declare global {
  interface Window {
    __PAGE_PROPS__: unknown;
  }
}

hydrateRoot(
  document.getElementById('root'),
  <App path={location.pathname} pageProps={window.__PAGE_PROPS__} />,
);
