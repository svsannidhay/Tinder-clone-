import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <TinderCards/>
      <SwipeButtons/>
    </div>
  ) 
}

export default App
