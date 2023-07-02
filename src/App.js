import React, { useState } from "react";
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Calories from "./pages/Calories";
function App() {
  //const [currentForm, setCurrentForm] = useState('login');

  //const toggleForm = (formName) => {
   // setCurrentForm(formName);
  //}

  return (
    <div className="App">
      {/* <Login /> */}
      {/* <div>
      <Navbar />
      </div> */}
      <div>
      <Calories />
      </div>

      
    </div>
  );
}

export default App;
