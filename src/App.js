/*
psuedocode  
use  login or signup
user is logged in
use a JWT

logut button rendered inside the Navbar

Navbar.js
container of the logo and the login/signup button

button for calories.js
button for dashboard.js
button for meet us.js


Dashboard popped up

dashboard is having table having daily  data
a button in the bottom of the dashboard to allow user enter his daliy calories

 calories.js
 user enter food in the search bar
 when user press search food data and nutrition fact will be displayed
 total calories for daily food intake will be displayed in the bottom of the page
 a button on the Navbar to take the user to back the dashboard page

 contributers.js

 containes of 5 avatars 
 each avatar have a breif presentation for every developer
 a linkedin button to take the user to the developer linkedin page

 



*/ 




import React from 'react';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;