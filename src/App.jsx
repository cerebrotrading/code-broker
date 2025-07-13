import React, { useState } from 'react';
import ScheduleInfo from './ScheduleInfo';

export default function App() {
  const [modoSimulacion, setModoSimulacion] = useState(false);

  const toggleSimulacion = () => {
    setModoSimulacion(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex justify-between items-center mb-4">
        <ScheduleInfo />
        <button
          onClick={toggleSimulacion}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
        >
          {modoSimulacion ? '🟢 Simulación Activa' : '🔁 Modo Simulación'}
        </button>
      </div>

      {modoSimulacion && (
        <div className="p-4 bg-yellow-100 text-black rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Simulación en Curso</h2>
          <p>Aquí puedes ver el estado simulado de los activos:</p>
          <ul className="mt-2 list-disc ml-6">
            <li><strong>META</strong> – simulación de precio activa</li>
            <li><strong>NVDA</strong> – monitoreo en curso</li>
            <li><strong>AMD</strong> – estrategia inactiva</li>
          </ul>
        </div>
      )}
    </div>
  );
}

