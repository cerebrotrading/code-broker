// src/ToggleSimulacion.jsx
import React, { useContext } from 'react';
import { SimulacionContext } from './SimulacionContext';

function ToggleSimulacion() {
  const { simulacionActiva, setSimulacionActiva } = useContext(SimulacionContext);

  return (
    <button
      onClick={() => setSimulacionActiva(!simulacionActiva)}
      style={{
        margin: '10px',
        padding: '10px 20px',
        backgroundColor: simulacionActiva ? '#4caf50' : '#2196f3',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
      }}
    >
      {simulacionActiva ? '✅ Simulación Activa' : '🔁 Activar Simulación'}
    </button>
  );
}

export default ToggleSimulacion;
