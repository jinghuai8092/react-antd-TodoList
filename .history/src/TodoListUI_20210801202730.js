import React, {Component} from 'react';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
    render(){
        return (
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <div>
                    <Input value={this.props.inputValue} placeholder="todo info" style={{ width: '300px', marginRight: '10px' }} onChange={this.props.handleInputChange} />
                    <Button type="primary" onClick={this.props.handleBtnOnClick}>Upload</Button>
                    <List
                        style={{marginTop:'10px',width:'300px'}}
                        bordered
                        dataSource={this.props.List}
                        renderItem={(item,index) => <List.Item onClick={(index)=>{this.props.handleItemDelete(index)}}>{item}</List.Item>}
                    />
                </div>
            </div>
        )
    }
    

}