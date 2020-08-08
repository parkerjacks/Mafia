import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Mafia</h1>
      <div> Can you figure out who the Mafia before it is too late?</div>
      <div> How to Play?</div>

      <div> # of Players </div>
      <select>
        <option> 8</option>
        <option> 9</option>
        <option>10 </option>
        <option> 11</option>
      </select>
      <div> Start </div>


    </div>
  );
}

export default App;
