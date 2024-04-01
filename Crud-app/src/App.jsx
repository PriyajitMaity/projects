import React from 'react'
import './App.css'
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddList from './components/AddList';
import Edit from './components/Edit';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
            <Routes>
              <Route path='/' element ={<Home/>}/>
              <Route path='/create' element ={<AddList/>}/>  
              <Route path={`/edit/:id`} element ={<Edit/>}/>
            </Routes>
            </div>
        
      
    </BrowserRouter>
  )
}

export default App;