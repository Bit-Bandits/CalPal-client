import React, { useEffect, useRef, useState } from "react";
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Dashboard from "./pages/Dashboard";
import Calories from "./pages/Calories";
import { Register } from "./Components/Signup";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

function App() {

  console.log(window.localStorage.getItem('id_token'))
  useEffect(() => {

    if (window.localStorage.getItem('id_token') === null ) {
      window.localStorage.setItem('id_token', 'null')
      window.location.pathname = '/login'
    }
    if (window.location.pathname === '/') {
      window.location.pathname = '/login'
    }
  }, [])
  const toggleForm = () => {
    if (window.location.pathname === '/login') {
      window.location.pathname = '/register'
    } else { window.location.pathname = '/login' }
  }

  return (

    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <NavLink to='calories'>Calories</NavLink>
          </nav>
          <Routes>
            <Route path='calories' element={<Calories />} />
            <Route path='login' element={<Login onFormSwitch={toggleForm} />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='register' element={<Register onFormSwitch={toggleForm} />} />


          </Routes>
        </div>
      </BrowserRouter>



      {/* <div>
      <Navbar />
      </div> */}
      {/* <div>
      <Calories /> */}
      {/* </div> */}


    </div>
  );
}

export default App;