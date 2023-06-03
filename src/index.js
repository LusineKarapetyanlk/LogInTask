import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initState = {
  logIn : false
}

const reducer = (state = initState, action)=>{
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        ...state,
        login: action.payload,
      }
    default:
      return state;
  }
}

const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      < App />
    </BrowserRouter>
  </Provider>
  /* </React.StrictMode> */
);
