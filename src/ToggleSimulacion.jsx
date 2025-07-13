import React, { useContext } from 'react';
import { SimulacionContext } from './SimulacionContext';

function ToggleSimulacion() {
  const { simulacionActiva, toggleSimulacion } = useContext(SimulacionContext);

  return (
    <button
      onClick={toggleSimulacion}
      className={`px-4 py-2 rounded-lg font-medium mb-4 ${
        simulacionActiva
          ? 'bg-red-500 text-white'
          : 'bg-blue-500 text-white'
      }`}
    >
      {simulacionActiva ? '🔴 Simulación Activa' : '🔁 Activar Simulación'}
    </button>
  );
}

export default ToggleSimulacion;
