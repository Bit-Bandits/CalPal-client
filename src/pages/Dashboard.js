
import React from 'react';

import Auth from '../utils/auth';

export default function Dashboard() {

  
  if(Auth.loggedIn()) {
    return(
      <h2>Dashboard</h2>
    );
  }
  else {
    window.location.assign('/login');
  }

}