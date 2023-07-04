import React, { useState } from "react";
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Calories from "./pages/Calories";
import { Register } from "./Components/Signup";

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

function App() {


  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
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
          </Routes>
        </div>
      </BrowserRouter>

       {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
      
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