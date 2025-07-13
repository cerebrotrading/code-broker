// src/App.jsx
import React from 'react';
import { SimulacionProvider } from './SimulacionContext';
import ToggleSimulacion from './ToggleSimulacion';
import ChecklistMorning from './ChecklistMorning';
import TradingViewWidget from './TradingViewWidget';

function App() {
  return (
    <SimulacionProvider>
      <div style={{ padding: '30px 20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#0f0f0f', color: '#ffffff', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '20px' }}>CODE BROKER</h1>
        <ToggleSimulacion />
        <ChecklistMorning />

        <div style={{ marginTop: '40px' }}>
          <h2>META</h2>
          <TradingViewWidget symbol="META" />
        </div>

        <div style={{ marginTop: '40px' }}>
          <h2>NVDA</h2>
          <TradingViewWidget symbol="NVDA" />
        </div>

        <div style={{ marginTop: '40px' }}>
          <h2>AMD</h2>
          <TradingViewWidget symbol="AMD" />
        </div>
      </div>
    </SimulacionProvider>
  );
}

export default App;
