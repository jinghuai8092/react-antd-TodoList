import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index';
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'


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
        return (
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <div>
                    <Input value={this.state.inputValue} placeholder="todo info" style={{ width: '300px', marginRight: '10px' }} onChange={this.handleInputChange} />
                    <Button type="primary" onClick={this.handleBtnOnClick}>Upload</Button>
                    <List
                        style={{marginTop:'10px',width:'300px'}}
                        bordered
                        dataSource={this.state.List}
                        renderItem={(item,index) => <List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>}
                    />
                </div>
            </div>
        )
    }
    handleInputChange(e){
        const action={
            type:'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
    }
    handleStoreChange(){
        // console.log('store Changed');
        this.setState(store.getState());
    }
    handleBtnOnClick(){
        const action={
            type:'add_todo_item',
            
        }
        store.dispatch(action);
    }
    handleItemDelete(index){
        const action={
            type:'delete_todo_item',
            index
        }
        store.dispatch(action);
    }
}

export default TodoList;