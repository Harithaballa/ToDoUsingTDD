import React from 'react';
import {render, fireEvent, getByTestId} from '@testing-library/react'
import Home from './Home'
import { shallow } from 'enzyme';
import TodoList from './TodoList';

describe("",()=>{
    let homeWrapper;

    beforeAll(()=>{
        homeWrapper= shallow(<Home/>)
    })

    it("has state", ()=>{
       const state= homeWrapper.state();
       expect(state).not.toBeNull(); 
    })

    it("has task and todolist properties",()=>{
        const state=homeWrapper.state();
        expect(state.task).toBeDefined();
        expect(state.todoList).toBeDefined();
    })

    it("input text and add buttons should be defined",()=>{
        const {getByTestId}= render(<Home/>);
        expect(getByTestId("TextInput")).toBeDefined();
        expect(getByTestId("Addbtn")).toBeDefined();
    })

    it("render TodoList",()=>{
        expect(homeWrapper.find(TodoList)).toHaveLength(1);
    })

    it("passes todoList property of state to TodoList as props",()=>{
        const todos= homeWrapper.find(TodoList);
        expect(todos.props().todoList).toEqual(homeWrapper.state().todoList)
    })
})

describe('test behaviour of Home', () => {

    it("input field should have task value",()=>{
        const {getByTestId}= render(<Home/>);
        const  textValue= getByTestId("TextInput");
        fireEvent.change(textValue,{target:{value:"drink water"}})
        expect(textValue.value).toBe("drink water")
    })

    it("should display todo value when we add a todo",()=>{
        const {getByTestId}= render(<Home/>);
        const  textValue= getByTestId("TextInput");
        fireEvent.change(textValue,{target:{value:"drink water"}})

        const addBtn=getByTestId("Addbtn");
        fireEvent.click(addBtn);
        expect(getByTestId("TaskValue")).toHaveTextContent("drink water")
    })
})