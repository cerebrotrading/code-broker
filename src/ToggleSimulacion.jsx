// src/ToggleSimulacion.jsx
import React, { useContext } from 'react';
import { SimulacionContext } from './SimulacionContext';

function ToggleSimulacion() {
  const { simulacionActiva, setSimulacionActiva } = useContext(SimulacionContext);

  const toggle = () => {
    setSimulacionActiva(!simulacionActiva);
  };

  return (
    <button onClick={toggle}>
      {simulacionActiva ? '🔁 Simulación Activa' : '🔁 Activar Simulación'}
    </button>
  );
}

export default ToggleSimulacion;
