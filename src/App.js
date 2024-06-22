// src/App.js
import React from 'react';

import NewsTable from './components/Newtable';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>News App</h1>
      </header>
      <NewsTable />
    </div>
  );
}

export default App;
