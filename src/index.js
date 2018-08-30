import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

render(
  <Provider store={store}>
    <App />, document.getElementById('app')
  </Provider>
);
