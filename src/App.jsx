// src/App.jsx
import React from 'react';
import { SimulacionProvider } from './SimulacionContext';
import ToggleSimulacion from './ToggleSimulacion';
import ChecklistMorning from './ChecklistMorning';

function App() {
  return (
    <SimulacionProvider>
      <div className="app">
        <h1>CODE BROKER</h1>
        <ToggleSimulacion />
        <ChecklistMorning />
      </div>
    </SimulacionProvider>
  );
}

export default App;
