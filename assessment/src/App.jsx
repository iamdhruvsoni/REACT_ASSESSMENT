import React from 'react';
import Accordion from './Accordion';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{textAlign:'center'}}>React Accordion Example</h1>
        <Accordion />
      </header>
    </div>
  );
}

export default App;
