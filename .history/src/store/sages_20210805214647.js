import {takeEvery} from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
// generator 函数

function* getInitList(){
    console.log('abc')
}

function* TodoSagas() {
    yield takeEvery(GET_INIT_LIST, getInitList);
  }
  
  export default TodoSagas;