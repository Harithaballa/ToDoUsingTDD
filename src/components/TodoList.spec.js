import {shallow} from 'enzyme'
import TodoList from './TodoList'
import React from 'react';
import {render, fireEvent,waitFor} from '@testing-library/react'
import Home from './Home'

describe("TodoList",()=>{
   
    it("renders no todo when todolist is empty",()=>{
        const todos=[]
        const todosWrapper=shallow(<TodoList todoList={todos}/>)
        expect(todosWrapper.find('div')).toHaveLength(0);
    })

    it("renders todolist",()=>{
        const todos=[
        {
            id:1,
            value:'drink water',
            completed:false
        },
        {
            id:2,
            value:'read a book',
            completed:false
        },
        ]
        const todosWrapper=shallow(<TodoList todoList={todos}/>)
        expect(todosWrapper.find('div')).toHaveLength(2);
    })

    it("render a todo",()=>{
        const todos=[
            {
                id:1,
                value:'drink water',
                completed:false
            }
        ];

        const {getByTestId}=render(<TodoList todoList={todos}/>)
        expect(getByTestId("TaskValue")).toHaveTextContent("drink water")
        expect(getByTestId("doneImg")).toBeInTheDocument();
        expect(getByTestId("deleteImg")).toBeInTheDocument();
    })

    it("delete todo by clicking on delete image",async()=>{
        const {getByTestId,queryByText}= render(<Home/>);
        const  textValue= getByTestId("TextInput");
        fireEvent.change(textValue,{target:{value:"drink water"}})

        const addBtn=getByTestId("Addbtn");
        fireEvent.click(addBtn);
        expect(getByTestId("TaskValue")).toBeInTheDocument(); 

        const todoListComponent=render(<TodoList/>)
        fireEvent.click(todoListComponent.getByTestId("deleteImg"));
        await waitFor(() => {
            expect(queryByText(/drink water/i)).not.toBeInTheDocument()
        })
    })

    it("should mark as complete when we click on complete image",()=>{
        const {getByTestId}= render(<Home/>);
        const  textValue= getByTestId("TextInput");
        fireEvent.change(textValue,{target:{value:"drink water"}})
        const addBtn=getByTestId("Addbtn");
        fireEvent.click(addBtn);
        expect(getByTestId("TaskValue")).toBeInTheDocument(); 
        const todoListComponent=render(<TodoList/>)
        fireEvent.click(todoListComponent.getByTestId("doneImg"));
        expect(getByTestId("TaskValue")).toHaveAttribute('class',"todoCard complete")
    })
})