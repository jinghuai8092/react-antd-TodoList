import {takeEvery} from 'redux-saga/effects';

// generator 函数

function* TodoSagas() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
  }
  
  export default TodoSagas;