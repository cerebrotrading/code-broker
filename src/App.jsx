// src/App.jsx
import React from 'react';
import { SimulacionProvider } from './SimulacionContext';
import ToggleSimulacion from './ToggleSimulacion';
import ChecklistMorning from './ChecklistMorning';
import TradingViewWidget from './TradingViewWidget';

function App() {
  return (
    <SimulacionProvider>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>CODE BROKER</h1>
        <ToggleSimulacion />
        <ChecklistMorning />
        <h2>META</h2>
        <TradingViewWidget symbol="META" />
        <h2>NVDA</h2>
        <TradingViewWidget symbol="NVDA" />
        <h2>AMD</h2>
        <TradingViewWidget symbol="AMD" />
      </div>
    </SimulacionProvider>
  );
}

export default App;
