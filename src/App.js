
import Calories from './pages/Calories';
import DashBoard from './pages/Dashboard';
import Contributors from './pages/Contributors';
import { useState } from 'react';
import SignupForm from './components/SignupForm';



function App() {
  const [currentPage, setCurrentPage] = useState('SignupForm')
  
  function render(){
    if (currentPage === 'Calories') {
      return <Calories />;
    }
    if (currentPage === 'Dashboard') {
      return <DashBoard />;
    }
    if (currentPage === 'Contributors') {
      return <Contributors />;
    }
    if (currentPage === 'SignupForm') {
       return <SignupForm />;
       }
  }
  return (
    <div>
     <div className="App">
      <Contributors 
      currentPage={currentPage} 
      setCurrentPage={setCurrentPage} 
      />
      <main>{render()}</main>
      </div>
     </div>

  );
     
     }

export default App;
