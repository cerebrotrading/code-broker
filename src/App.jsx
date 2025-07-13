// src/App.jsx
import React, { useContext } from 'react';
import { SimulacionProvider, SimulacionContext } from './SimulacionContext';
import ToggleSimulacion from './ToggleSimulacion';
import ChecklistMorning from './ChecklistMorning';
import TradingViewWidget from './TradingViewWidget';

function GraficosPanel() {
  const { simulacionActiva } = useContext(SimulacionContext);

  return (
    <>
      <h2 style={{ textAlign: 'center', marginTop: '30px' }}>Gráficos CODE BROKER</h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '20px',
      }}>
        <TradingViewWidget symbol="META" />
        <TradingViewWidget symbol="NVDA" />
        <TradingViewWidget symbol="AMD" />
      </div>
      {simulacionActiva && (
        <div style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold', color: '#4caf50' }}>
          🟢 MODO SIMULACIÓN ACTIVADO
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <SimulacionProvider>
      <div style={{ padding: '30px 20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#0f0f0f', color: '#ffffff', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '20px' }}>CODE BROKER</h1>
        <ToggleSimulacion />
        <ChecklistMorning />
        <GraficosPanel />
      </div>
    </SimulacionProvider>
  );
}

export default App;

