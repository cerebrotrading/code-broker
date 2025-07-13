// src/App.jsx
import React, { useEffect, useState } from 'react';
import './index.css';

const isOperationalDay = () => {
  const today = new Date();
  const day = today.getDay();
  const usHoliday = [
    // Feriados de EE.UU. 2025 (ejemplos)
    '2025-07-04', // Independence Day
    '2025-09-01', // Labor Day
    '2025-11-27', // Thanksgiving
  ];
  const todayStr = today.toISOString().slice(0, 10);
  return day >= 1 && day <= 5 && !usHoliday.includes(todayStr);
};

const getCurrentPhase = () => {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const time = hour * 60 + minutes;

  if (time >= 930 && time < 945) return '🚕 TAXI (9:30 – 9:45 a.m.)';
  if (time >= 1045 && time < 1100) return '🕚 Ajustes tácticos (10:45 – 11:00 a.m.)';
  if (time >= 1330 && time < 1530) return '🕒 Cierre parcial (13:30 – 15:30 p.m.)';
  if (time >= 1530) return '🔒 Cierre total (15:30 p.m.)';
  return '⏳ Fase previa (antes de 9:30 a.m.)';
};

const App = () => {
  const [isDayActive, setIsDayActive] = useState(false);
  const [phase, setPhase] = useState('');

  useEffect(() => {
    setIsDayActive(isOperationalDay());
    setPhase(getCurrentPhase());
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-2">CODE BROKER</h1>
      <p className="text-sm mb-4 text-gray-300">{phase}</p>

      {!isDayActive ? (
        <div className="bg-red-700 p-4 rounded-xl">⛔ Hoy no es un día operativo. Las estrategias están ocultas.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded-2xl p-2 shadow">
              <iframe
                src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_e1&symbol=NASDAQ:META&interval=5&theme=dark&style=1"
                width="100%"
                height="300"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-800 rounded-2xl p-2 shadow">
              <iframe
                src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_e2&symbol=NASDAQ:NVDA&interval=5&theme=dark&style=1"
                width="100%"
                height="300"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-800 rounded-2xl p-2 shadow">
              <iframe
                src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_e3&symbol=NASDAQ:AMD&interval=5&theme=dark&style=1"
                width="100%"
                height="300"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <footer className="mt-6 text-xs text-gray-400">
            Capital por entrada: $500 USD | No SL/TP en eToro | Gestión visual por G/P manual | Validación institucional
          </footer>
        </>
      )}
    </div>
  );
};

export default App;

