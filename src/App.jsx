import React from 'react';
import { SimulacionProvider, useSimulacion } from './SimulacionContext';
import ScheduleInfo from './ScheduleInfo.jsx';
import ChecklistMorning from './ChecklistMorning.jsx';
import TradingViewWidget from './TradingViewWidget.jsx';

const SimulacionToggle = () => {
  const { isSimulacionActiva, toggleSimulacion } = useSimulacion();

  return (
    <div className="text-center my-4">
      <button
        onClick={toggleSimulacion}
        className={`px-4 py-2 rounded-md font-bold ${
          isSimulacionActiva ? 'bg-green-600 text-white' : 'bg-gray-300 text-black'
        }`}
      >
        {isSimulacionActiva ? '🟢 Simulación Activa' : '🔁 Modo Simulación'}
      </button>
    </div>
  );
};

const AppContent = () => {
  const { isSimulacionActiva } = useSimulacion();

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">CODE BROKER</h1>
      <ScheduleInfo />
      <SimulacionToggle />

      {isSimulacionActiva && (
        <div className="bg-yellow-100 p-4 rounded-md my-4">
          <h2 className="text-xl font-semibold">Simulación en Curso</h2>
          <p className="text-sm text-gray-700">
            Aquí puedes ver el estado simulado de los activos:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>META – simulación de precio activa</li>
            <li>NVDA – monitoreo en curso</li>
            <li>AMD – estrategia inactiva</li>
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <TradingViewWidget symbol="NASDAQ:META" />
        <TradingViewWidget symbol="NASDAQ:NVDA" />
        <TradingViewWidget symbol="NASDAQ:AMD" />
      </div>

      <ChecklistMorning />
    </div>
  );
};

const App = () => (
  <SimulacionProvider>
    <AppContent />
  </SimulacionProvider>
);

export default App;

