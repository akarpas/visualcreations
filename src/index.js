import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import './favicon.ico';

// NOTE: Replace BrowserRouter with HashRouter if you want to test
// production build locally

import store from './store';

import App from './components/App';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);