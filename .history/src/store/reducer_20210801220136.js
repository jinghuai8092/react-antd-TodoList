// import { List } from "antd/lib/form/Form";
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionTypes';

const defaultState={
    inputValue:'',
    List:[]
}
//reducer 可以接受state，但是绝不能修改state
export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE){
        const newState=JSON.parse(JSON.stringify(state));
        //JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
        newState.inputValue =action.value;
        return newState;
    }
    if(action.type===ADD_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.List.push(newState.inputValue);
        newState.inputValue='';
        console.log(newState)
        return newState;
    }
    if(action.type===DELETE_TODO_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.List.splice(action.index,1);
        console.log(newState)
        //找到对应的下标然后删除
        return newState;
    }
    if(action.type===)
    // console.log(state,action)
    return state;
    //state 存放的是所有仓库中的数据
    //action 是用户传过来的那句话

}