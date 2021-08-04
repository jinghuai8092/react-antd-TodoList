import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
const composeEnhancers =
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({}) : compose;

const store=createStore(reducer,applyMiddleware(thunk),
);
export default store;