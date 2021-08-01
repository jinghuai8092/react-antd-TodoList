import { List } from "antd/lib/form/Form";

const defaultState={
    inputValue:'123',
    List:[1,2]
}
//reducer 可以接受state，但是绝不能修改state
export default (state=defaultState,action)=>{
    if(action.type==='change_input_value'){
        const newState=JSON.parse(JSON.stringify(state));
        //JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
        newState.inputValue =action.value;
        return newState;
    }
    if(action.type==='add_todo_item'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.List.push(newState.inputValue);
        newState.inputValue='';
        console.log(newState)
    }
    console.log(state,action)
    return state;
    //state 存放的是所有仓库中的数据
    //action 是用户传过来的那句话

}