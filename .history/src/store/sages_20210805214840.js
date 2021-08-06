import {takeEvery} from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
import axios from 'axios';

// generator 函数

function* getInitList(){
    // console.log('abc');
        axios.get('/list.json').then((res)=>{
            const data =res.data;
            const action =initListAction(data);
            store.dispatch(action)
        });
}

function* TodoSagas() {
    yield takeEvery(GET_INIT_LIST, getInitList);
  }
  
  export default TodoSagas;