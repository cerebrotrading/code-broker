import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// App.jsx
import React from 'react';

const isMarketOpen = () => {
  const today = new Date();
  const day = today.getDay();
  const month = today.getMonth();
  const date = today.getDate();

  const isWeekend = (day === 0 || day === 6);
  const usHolidays = [
    '1-1',   // New Year
    '7-4',   // Independence Day
    '12-25'  // Christmas
  ];

  const todayKey = `${month + 1}-${date}`;
  const isHoliday = usHolidays.includes(todayKey);

  return !(isWeekend || isHoliday);
};

const App = () => {
  const marketOpen = isMarketOpen();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">CODE BROKER</h1>

      {/* Estrategia */}
      <div className="mb-6 p-4 rounded-2xl shadow bg-gray-800">
        {marketOpen ? (
          <div className="text-green-400 font-semibold">
            🚀 ESTRATEGIA TAXI ACTIVADA – Activo seleccionado: [esperando validación institucional]
          </div>
        ) : (
          <div className="text-red-400 font-semibold">
            ⛔ Hoy no hay operación CODE por ser feriado o fin de semana.
          </div>
        )}
      </div>

      {/* Ventanas de activos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-2xl p-2 shadow">
          <iframe
            src="https://www.tradingview.com/chart/?symbol=NASDAQ:META"
            className="w-full h-[400px] rounded-xl"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="bg-gray-800 rounded-2xl p-2 shadow">
          <iframe
            src="https://www.tradingview.com/chart/?symbol=NASDAQ:NVDA"
            className="w-full h-[400px] rounded-xl"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="bg-gray-800 rounded-2xl p-2 shadow">
          <iframe
            src="https://www.tradingview.com/chart/?symbol=NASDAQ:AMD"
            className="w-full h-[400px] rounded-xl"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;

// index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: system-ui, sans-serif;
}

