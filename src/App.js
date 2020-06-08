import React from 'react';
import './App.css';
import Chart from './component/chart';

function App() {
  return (
    <div className="App">
      <div className='bar'>
      <h2>Welcome</h2>
      Team Overview
      </div>
      <div className='chart'>
      <Chart />
      </div>
    </div>
  );
}

export default App;
