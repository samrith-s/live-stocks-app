import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.scss';
import Store from './lib/Store';
import registerServiceWorker from './registerServiceWorker';

import App from './state/container';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
