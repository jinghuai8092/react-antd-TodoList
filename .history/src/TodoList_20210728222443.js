import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Input,Button } from 'antd';



class TodoList extends Component{
    render(){
        return (
            <div>
                <div>
                <Input placeholder="todo info" style={{width="300px"}}/>  
                <Button type="primary">Primary Button</Button>
              </div>
            </div>
            )
    }
}

export default TodoList;