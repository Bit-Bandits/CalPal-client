import React, { useState } from "react";
import './App.css';
import Login from './Components/Login';
function App() {
  //const [currentForm, setCurrentForm] = useState('login');

  //const toggleForm = (formName) => {
   // setCurrentForm(formName);
  //}

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
