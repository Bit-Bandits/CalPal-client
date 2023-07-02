import React, { useState } from "react";
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Calories from "./pages/Calories";
import { Register } from "./Components/Signup";

function App() {


  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
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