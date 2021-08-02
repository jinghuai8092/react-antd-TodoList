import React, { Component } from 'react';
import 'antd/dist/antd.css';

import store from './store/index';
// import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes';
import { getAddItemAction, getInputChangeAction ,getDeleteItemAction} from './store/actionCreators';
import TodoListUI from './TodoListUI';

// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
// ];

class TodoList extends Component {
    
    constructor(props){
        super(props);
        this.state=store.getState();
        console.log(this.state);
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleBtnOnClick=this.handleBtnOnClick.bind(this);
        store.subscribe(this.handleStoreChange);

    }
    
    
    render() {
        return 
        <TodoListUI 
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        
        />
    }
    handleInputChange(e){
        // const action={
        //     type:CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action=getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange(){
        // console.log('store Changed');
        this.setState(store.getState());
    }
    handleBtnOnClick(){
        // const action={
        //     type:ADD_TODO_ITEM,
            
        // }
        const action=getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index){
        // const action={
        //     type:DELETE_TODO_ITEM,
        //     index
        // }
        const action=getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default TodoList;