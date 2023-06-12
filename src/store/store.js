
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import history from '../history';
// reducer

import rootReducer from './rootReducer';
import { createRouterMiddleware } from '@lagunovsky/redux-react-router';



const routerMiddleware = createRouterMiddleware(history)
let middleware = [ thunk ,routerMiddleware ];
const store = createStore(rootReducer,/*load()*/ compose(
    applyMiddleware(...middleware),
));

export default store;
