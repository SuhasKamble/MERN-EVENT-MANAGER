import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';
import AddEvent from './pages/AddEvent';
import UpdateEvent from './pages/UpdateEvent';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/add" element={<AddEvent/>}></Route>
          <Route path="/event/:id" element={<Event/>}></Route>
          <Route path="/event/update/:id" element={<UpdateEvent/>}></Route>
        
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
