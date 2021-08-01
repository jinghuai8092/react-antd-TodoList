import { List } from "antd/lib/form/Form";

const defaultState={
    inputValue:'123',
    List:[1,2]
}

export default (state=defaultState,action)=>{
    if(action.type==='change_input_value'){
        
    }
    console.log(state,action)
    return state;
    //state 存放的是所有仓库中的数据
    //action 是用户传过来的那句话

}