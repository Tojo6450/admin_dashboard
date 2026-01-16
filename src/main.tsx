import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Theme } from '@radix-ui/themes'; 
import '@radix-ui/themes/styles.css';
import { store } from './app/store';
import App from './App';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme  accentColor="indigo" radius="large">
        <App />
      </Theme>
    </Provider>
  </React.StrictMode>
);