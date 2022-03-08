import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Register, Login, Home } from './pages'

const App = () => {
  return (
    <div className='App'>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
