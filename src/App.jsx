import React, { useState } from 'react';
import ScheduleInfo from './ScheduleInfo.jsx';
import ChecklistMorning from './ChecklistMorning.jsx';

const App = () => {
  const [simulacionActiva, setSimulacionActiva] = useState(false);

  const toggleSimulacion = () => {
    setSimulacionActiva(!simulacionActiva);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">CODE BROKER</h1>
        <ScheduleInfo />

        <button
          onClick={toggleSimulacion}
          className={`px-4 py-2 rounded-lg text-sm font-bold mb-4 ${
            simulacionActiva ? 'bg-green-600' : 'bg-blue-600'
          }`}
        >
          {simulacionActiva ? '🟢 Simulación Activa' : '🔁 Modo Simulación'}
        </button>

        {simulacionActiva && (
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-semibold mb-2">Simulación en Curso</h2>
            <p>Aquí puedes ver el estado simulado de los activos:</p>
            <ul className="mt-2 list-disc list-inside text-sm">
              <li><strong>META</strong> – simulación de precio activa</li>
              <li><strong>NVDA</strong> – monitoreo en curso</li>
              <li><strong>AMD</strong> – estrategia inactiva</li>
            </ul>
            {/* Aquí puedes renderizar gráficos ficticios o datos de ejemplo */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-center">
              <div className="bg-gray-700 p-3 rounded-xl">📈 META – Gráfico simulado</div>
              <div className="bg-gray-700 p-3 rounded-xl">📊 NVDA – Gráfico simulado</div>
              <div className="bg-gray-700 p-3 rounded-xl">📉 AMD – Gráfico simulado</div>
            </div>
          </div>
        )}

        {/* Otros componentes */}
        <ChecklistMorning />
        {/* Puedes añadir más módulos aquí */}
      </div>
    </div>
  );
};

export default App;

