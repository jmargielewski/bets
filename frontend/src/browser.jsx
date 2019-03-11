import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/configureStore';

const store = configureStore();

render(
  <Root store={store}>
    <App />
  </Root>,
  document.getElementById('root'),
);
registerServiceWorker();
