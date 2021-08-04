import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const store=createStore(reducer,applyMiddleware([thunk,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]),
);

export default store;