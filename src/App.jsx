import React, { useState } from 'react';
import ChecklistMorning from './ChecklistMorning';
import ScheduleInfo from './ScheduleInfo';
import TradingViewWidget from './TradingViewWidget';

const App = () => {
  const [modoSimulacion, setModoSimulacion] = useState(false);

  const toggleSimulacion = () => {
    setModoSimulacion(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-2">CODE BROKER</h1>

      <ScheduleInfo />

      <div className="flex justify-center">
        <button
          onClick={toggleSimulacion}
          className={`px-6 py-2 text-sm font-bold rounded-2xl shadow-md transition ${
            modoSimulacion ? 'bg-green-600 hover:bg-green-700' : 'bg-yellow-500 hover:bg-yellow-600'
          }`}
        >
          {modoSimulacion ? '🟢 Simulación Activa' : '🔁 Modo Simulación'}
        </button>
      </div>

      {modoSimulacion && (
        <div className="bg-gray-800 rounded-xl p-4 mt-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-green-400">Simulación en Curso</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><strong>META</strong> – simulación de precio activa</li>
            <li><strong>NVDA</strong> – monitoreo en curso</li>
            <li><strong>AMD</strong> – estrategia inactiva</li>
          </ul>
        </div>
      )}

      <TradingViewWidget />

      <ChecklistMorning />
    </div>
  );
};

export default App;

