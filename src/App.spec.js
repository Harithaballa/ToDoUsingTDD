import React from 'react';
import App from './App'
import {render,screen} from '@testing-library/react'
import Home from './components/Home'
import { shallow } from 'enzyme';

describe("Basic testing of App component",()=>{

    it("render Home",()=>{
        const appWrapper=shallow(<App/>);
        expect(appWrapper.find(Home)).toHaveLength(1);
    })

    it("",()=>{
        render(<App/>)
        const header=screen.getByText(/To Do List/i)
        expect(header).toBeInTheDocument()
    })
})