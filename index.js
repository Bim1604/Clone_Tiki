/**
 * @format
 */
 import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';

const store = createStore(reducers, applyMiddleware(thunk))

const RNRedux = () => (
    <Provider store = { store }>
      <App />
    </Provider>
  );

AppRegistry.registerComponent(appName, () => RNRedux);
