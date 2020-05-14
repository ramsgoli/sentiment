import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { HttpStore } from './http_store';
import { AppStore } from './app_store';

const httpStore = new HttpStore()
const appStore = new AppStore(httpStore);

ReactDOM.render(
  <React.StrictMode>
    <App store={appStore} />
  </React.StrictMode>,
  document.getElementById('root')
);
