import {takeEvery,put} from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
import {initListAction} from './actionCreators'
import axios from 'axios';

// generator 函数

function* getInitList(){
    // console.log('abc');
    const res= yield axios.get('/list.json');
    const action =initListAction(res.data);
    yield put(action);
        // axios.get('/list.json').then((res)=>{
        //     const data =res.data;
            // store.dispatch(action)
        // });
}

function* TodoSagas() {
    yield takeEvery(GET_INIT_LIST, getInitList);
  }
  
  export default TodoSagas;