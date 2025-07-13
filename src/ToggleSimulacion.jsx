// src/ToggleSimulacion.jsx
import React, { useContext } from 'react';
import { SimulacionContext } from './SimulacionContext';

function ToggleSimulacion() {
  const { simulacionActiva, setSimulacionActiva } = useContext(SimulacionContext);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      <button
        onClick={() => setSimulacionActiva(!simulacionActiva)}
        style={{
          padding: '12px 24px',
          backgroundColor: simulacionActiva ? '#4caf50' : '#2196f3',
          color: '#fff',
          border: 'none',
          borderRadius: '10px',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        }}
      >
        {simulacionActiva ? '✅ Simulación Activa' : '🔁 Activar Simulación'}
      </button>
    </div>
  );
}

export default ToggleSimulacion;
