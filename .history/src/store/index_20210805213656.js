import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import TodoSagas from './sages';

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(
    // applyMiddleware(thunk),
    // other store enhancers if any
    applyMiddleware(sagaMiddleware)
  );
const store=createStore(reducer,enhancer);
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store;