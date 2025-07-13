import React, { useState, useEffect } from 'react';
import ScheduleInfo from './ScheduleInfo';
import ChecklistMorning from './ChecklistMorning';

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isSimulacion, setIsSimulacion] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const day = currentTime.toLocaleDateString('en-US', { weekday: 'long' });
  const hour = currentTime.getHours();
  const isWeekday = currentTime.getDay() >= 1 && currentTime.getDay() <= 5;
  const isOperativo = isWeekday;
  const isAntesTaxi = hour >= 7 && hour < 9.5;
  const showChecklist = (isOperativo && isAntesTaxi) || isSimulacion;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-2">CODE BROKER</h1>
      <p className="text-sm text-gray-300 mb-4">
        📅 Hoy: <span className="font-semibold">{day}</span> | 🕒 {currentTime.toLocaleTimeString()}
      </p>

      {/* Gráficos visibles siempre */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-2xl p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">META</h2>
          <iframe
            src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?symbol=NASDAQ:META&locale=es&dateRange=1D&colorTheme=dark&isTransparent=true&autosize=true"
            width="100%" height="200" frameBorder="0"
          ></iframe>
          <iframe
            src="https://s.tradingview.com/embed-widget/advanced-chart/?symbol=NASDAQ:META&interval=1&theme=dark&style=1&hide_top_toolbar=true&hide_side_toolbar=true&withdateranges=false&autosize=true"
            width="100%" height="200" frameBorder="0"
          ></iframe>
        </div>

        <div className="bg-gray-800 rounded-2xl p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">NVDA</h2>
          <iframe
            src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?symbol=NASDAQ:NVDA&locale=es&dateRange=1D&colorTheme=dark&isTransparent=true&autosize=true"
            width="100%" height="200" frameBorder="0"
          ></iframe>
          <iframe
            src="https://s.tradingview.com/embed-widget/advanced-chart/?symbol=NASDAQ:NVDA&interval=1&theme=dark&style=1&hide_top_toolbar=true&hide_side_toolbar=true&withdateranges=false&autosize=true"
            width="100%" height="200" frameBorder="0"
          ></iframe>
        </div>

        <div className="bg-gray-800 rounded-2xl p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">AMD</h2>
          <iframe
            src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?symbol=NASDAQ:AMD&locale=es&dateRange=1D&colorTheme=dark&isTransparent=true&autosize=true"
            width="100%" height="200" frameBorder="0"
          ></iframe>
          <iframe
            src="https://s.tradingview.com/embed-widget/advanced-chart/?symbol=NASDAQ:AMD&interval=1&theme=dark&style=1&hide_top_toolbar=true&hide_side_toolbar=true&withdateranges=false&autosize=true"
            width="100%" height="200" frameBorder="0"
          ></iframe>
        </div>
      </div>

      {/* Botón de simulación */}
      <div className="mt-6">
        <button
          onClick={() => setIsSimulacion(!isSimulacion)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow"
        >
          {isSimulacion ? '❌ Salir de Simulación' : '🧪 Modo Simulación'}
        </button>
      </div>

      {/* Mostrar checklist de 7–9:30am */}
      {showChecklist && <ChecklistMorning />}

      {/* Información de horario estratégico */}
      <div className="mt-6">
        <ScheduleInfo />
      </div>
    </div>
  );
};

export default App;

