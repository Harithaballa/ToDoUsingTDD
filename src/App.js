import React, { Component } from 'react';
import Home from './components/Home'
import './index.css'

// function App() {
class App extends Component{
  render(){
  return (
    <div className='App'>
      <h1 data-testid="header">To Do List</h1>
      <Home/>
    </div>
  );
  }
}

export default App;
