import React, { useState } from 'react';
import './App.css';
import PieChart from './charts/PieChart';
import BarChart from './charts/BarChart';
import LineChart from './charts/LineChart';
import AreaChart from './charts/AreaChart';

function App() {

  return (
      <div>
          <h1>DASHBOARD</h1>

          <PieChart/>

          <PieChart is3D={true}/>

          <PieChart pieHole={0.4}/>

          <BarChart/>

          <LineChart/>

          <AreaChart/>

      </div>
  );
}

export default App;
