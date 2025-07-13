import React, { useState, useEffect } from 'react';
import ScheduleInfo from './ScheduleInfo';
import ChecklistMorning from './ChecklistMorning';

const App = () => {
  const [simulationActive, setSimulationActive] = useState(false);
  const [isMarketDay, setIsMarketDay] = useState(false);

  // Determina si es día operativo (lunes a viernes)
  useEffect(() => {
    const today = new Date().getDay();
    setIsMarketDay(today >= 1 && today <= 5); // Lunes a viernes
  }, []);

  const toggleSimulation = () => {
    setSimulationActive(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4">CODE BROKER</h1>
      
      <ScheduleInfo />

      {/* Botón para activar simulación solo si es día operativo */}
      {isMarketDay && (
        <button
          onClick={toggleSimulation}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-4"
        >
          🔁 {simulationActive ? 'Detener Simulación' : 'Modo Simulación'}
        </button>
      )}

      {/* Estado de simulación */}
      {simulationActive && (
        <div className="mt-6 bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold text-green-400 mb-2">🟢 Simulación Activa</h2>
          <p className="mb-4">Simulación en Curso<br />Aquí puedes ver el estado simulado de los activos:</p>
          <ul className="list-disc list-inside text-sm text-gray-300">
            <li>META – simulación de precio activa</li>
            <li>NVDA – monitoreo en curso</li>
            <li>AMD – estrategia inactiva</li>
          </ul>
        </div>
      )}

      {/* Checklist táctico */}
      <div className="mt-8">
        <ChecklistMorning />
      </div>

      {/* Gráficos oficiales de TradingView */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {/* META */}
        <div>
          <h3 className="font-bold mb-2">📈 META – Gráfico oficial</h3>
          <iframe
            src="https://s.tradingview.com/widgetembed/?symbol=NASDAQ:META&interval=5&theme=dark&style=1&timezone=America%2FNew_York"
            width="100%"
            height="400"
            style={{ border: 'none' }}
            allowFullScreen
          ></iframe>
        </div>

        {/* NVDA */}
        <div>
          <h3 className="font-bold mb-2">📊 NVDA – Gráfico oficial</h3>
          <iframe
            src="https://s.tradingview.com/widgetembed/?symbol=NASDAQ:NVDA&interval=5&theme=dark&style=1&timezone=America%2FNew_York"
            width="100%"
            height="400"
            style={{ border: 'none' }}
            allowFullScreen
          ></iframe>
        </div>

        {/* AMD */}
        <div>
          <h3 className="font-bold mb-2">📉 AMD – Gráfico oficial</h3>
          <iframe
            src="https://s.tradingview.com/widgetembed/?symbol=NASDAQ:AMD&interval=5&theme=dark&style=1&timezone=America%2FNew_York"
            width="100%"
            height="400"
            style={{ border: 'none' }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;

