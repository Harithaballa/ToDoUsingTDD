import '../index.css'
import doneImg from '../images/copy.png';
import deleteImg from '../images/delete.png';
import { Component } from 'react';

export default class TodoList extends Component{

    render(){
        return this.props.todoList && this.props.todoList.map((todo)=>(
            <div key={todo.id}>
                {todo.completed?<button type="button" className='todoCard complete' data-testid="TaskValue">{todo.value}</button>: 
                <button type="button" className='todoCard' data-testid="TaskValue">{todo.value}</button>}
                <img className='photo' src={doneImg} alt="not found" onClick={()=>this.props.markAsDone(todo)} data-testid="doneImg"/>
                <span></span>
                <img className='photo'  src={deleteImg} alt="not found" onClick={()=>this.props.deleteTodo(todo)} data-testid="deleteImg"/>
            </div>
            )
        )
    }
}