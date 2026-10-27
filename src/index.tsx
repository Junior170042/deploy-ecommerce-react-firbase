import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN;
const auth0ClientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const AuthenticatedApp: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Auth0Provider
      domain={auth0Domain || 'not-configured.invalid'}
      clientId={auth0ClientId || 'not-configured'}
      authorizationParams={{ redirect_uri: window.location.origin }}
      cacheLocation="localstorage"
      useRefreshTokens
      onRedirectCallback={(appState) => navigate(appState?.returnTo || window.location.pathname)}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthenticatedApp />
      </BrowserRouter>
    </React.StrictMode>
  );
}


