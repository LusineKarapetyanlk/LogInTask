import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import history from './history';
import { createRouterMiddleware, createRouterReducer, push, ReduxRouter, ReduxRouterSelector } from '@lagunovsky/redux-react-router'

const routerSelector = (state) => state.navigator
const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
      // <React.StrictMode>
        <Provider store={store}>
          <ReduxRouter history={history} routerSelector={routerSelector}>
            <BrowserRouter history={history}>
              < App />
            </BrowserRouter>
          </ReduxRouter>
        </Provider>
      // </React.StrictMode> 
);
