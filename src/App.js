import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App p-5 justify-content-center">
      <div className="appBorder">
          <div className="box text-dark gridItem1">picture</div>
          <div className="box  gridItem2">skills</div>
          <div className="box gridItem3">Hi! I'm Tim.</div>
          <div className="box g gridItem4">contactinfo</div>
          <div className="box gridItem5">portfolios</div>
          <div className="box "></div>
          
          <div className="box d-flex align-items-center justify-content-around">
            
              <i class="fab fa-facebook fa-3x"></i>
              <i class="fab fa-linkedin fa-3x"></i>                 
              <i class="fab fa-github-square fa-3x"></i>
              <i class="fab fa-gitlab fa-3x"></i>
           
          </div>
         
       
          
         
      </div>
    </div>
  );
}

export default App;
