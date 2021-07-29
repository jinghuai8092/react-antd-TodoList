import React, {Component} from 'react';
import 'antd/dist/antd.css';import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />, mountNode);

class TodoList extends Component{
    render(){
        return (
            <div>
                <div>
                    Hello world!
                </div>
            </div>
            )
    }
}

export default TodoList;