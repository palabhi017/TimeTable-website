
import './App.css';
import Pricepage from './components/Pricepage';
import Signuppage from './components/Signuppage';
import Loginpage from './components/Loginpage';
import Home from "./components/Home"
import Allroutes from './components/Allroutes';
import Todotable from './components/Todotable';
import Card from "./components/Cards"
import Timer from "./components/Timer"
// import Renav from "./components/Renav"
// import { useState } from 'react';

function App() {

  


  return (
    <div className="App">
     <Pricepage/> 
     <Signuppage/>  
     <Loginpage/>  
     <Home/> 
      <Allroutes/>
     {/* <Renav/> */}
     <Todotable/> 
     <Card/> 
      <Timer date="2022-12-21"/> 
    
    </div>
  );
}

export default App;
