import React, { useState } from "react";
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Dashboard from "./pages/Dashboard";
import Calories from "./pages/Calories";
import { Register } from "./Components/Signup";

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

function App() {



  const toggleForm = () => {
    if (window.location.pathname === '/login') {
      window.location.pathname = '/register'
    } else {window.location.pathname = '/login'}
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
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='login' element={<Login onFormSwitch={toggleForm} />} />
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