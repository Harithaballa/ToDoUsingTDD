import React, { Component } from 'react';
import '../index.css';
import TodoList from './TodoList'
import uuid from 'react-uuid'

export default class Home extends Component{

    state={
        task:'',
        todoList:[]
    }

    handleChange = (event) => {
        this.setState({task: event.target.value});
    };

    addTask= ()=>{
        const newTodo={
            id:uuid(),
            value: this.state.task, 
            completed:false
        }

        this.setState({todoList: [...this.state.todoList,newTodo] , task:''})
    }

    markAsComplete=(todo)=>{
        const todos=this.state.todoList.map(task => {
            if(task.id===todo.id){
                task.completed=!todo.completed;
            }
            return task;
        })
        this.setState({todoList: todos})
    }

    deleteTodo=({id})=>{
        const todos= this.state.todoList.filter(task =>task.id!==id);
        this.setState({todoList:todos})  
    }

    render(){
        return (
            <div>
            <input type="text" className="textInput"  placeholder="Enter Task" value={this.state.task} onChange={this.handleChange} data-testid="TextInput"/>
            <button className="addbtn" onClick={this.addTask} data-testid="Addbtn">add task</button> 
            <TodoList todoList={this.state.todoList} markAsDone={this.markAsComplete} deleteTodo={this.deleteTodo} />
            </div>
        )
    };
}