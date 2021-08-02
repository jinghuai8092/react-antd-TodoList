import React, {Component} from 'react';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
    render(){
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
    

}