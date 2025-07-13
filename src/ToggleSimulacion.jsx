// src/ToggleSimulacion.jsx
import React from 'react';
import { useSimulacion } from './SimulacionContext';

export default function ToggleSimulacion() {
  const { simulacionActiva, toggleSimulacion } = useSimulacion();

  return (
    <button
      onClick={toggleSimulacion}
      className={`mt-4 px-4 py-2 rounded text-sm font-semibold ${
        simulacionActiva
          ? 'bg-green-600 hover:bg-green-700'
          : 'bg-gray-600 hover:bg-gray-700'
      }`}
    >
      {simulacionActiva ? '🟢 Simulación Activa' : '🔁 Activar Simulación'}
    </button>
  );
}
