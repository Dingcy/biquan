import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
import { createHashHistory } from 'history';
import {  initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import App from './router/index';
import configureStore from './configureStore';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const initialState = {};
const history = createHashHistory();
const store = configureStore(initialState, history);


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them)
    resources: {
      en: {
        translation: {
          'Welcome to React': 'Welcome to React and react-i18next'
        }
      },
      zh: {
        translation: {
          'Welcome to React': '欢迎使用 React 和 react-i18next'
        }
      }
    },
    lng: 'zh',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
