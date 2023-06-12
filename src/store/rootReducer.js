import { combineReducers } from 'redux';
import history from '../history';
import { createRouterReducer } from '@lagunovsky/redux-react-router';
import loginReducer from "./logIn"


import { createRouterReducerMapObject } from '@lagunovsky/redux-react-router';

export default combineReducers({

    login: loginReducer,
    navigator: createRouterReducer(history),
   
});