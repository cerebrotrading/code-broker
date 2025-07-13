import React, { useState, useEffect } from 'react';
import ScheduleInfo from './ScheduleInfo';
import ChecklistMorning from './ChecklistMorning';

const assets = [
  { name: 'META', symbol: 'NASDAQ:META' },
  { name: 'NVDA', symbol: 'NASDAQ:NVDA' },
  { name: 'AMD', symbol: 'NASDAQ:AMD' }
];

const App = () => {
  const [isSimulacion, setIsSimulacion] = useState(false);
  const [today, setToday] = useState('');
  const [hour, setHour] = useState('');
  const [isOperativo, setIsOperativo] = useState(false);

  useEffect(() => {
    const now = new Date();
    const day = now.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'America/Bogota' });
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Bogota' });
    setToday(day);
    setHour(time);

    const isWeekend = now.getDay() === 0 || now.getDay() === 6;
    const isHoliday = false; // Aquí puedes conectar con API de feriados si lo deseas
    setIsOperativo(!isWeekend && !isHoliday);
  }, []);

  const toggleSimulacion = () => {
    setIsSimulacion(!isSimulacion);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-2">CODE BROKER</h1>
      <ScheduleInfo today={today} hour={hour} />

      <div className="flex justify-end mb-4">
        {!isOperativo && (
          <button
            onClick={toggleSimulacion}
            className="bg-yellow-500 text-black font-semibold py-1 px-4 rounded-xl shadow hover:bg-yellow-400"
          >
            {isSimulacion ? 'Salir de Simulación' : '🔁 Modo Simulación'}
          </button>
        )}
      </div>

      {(isOperativo || isSimulacion) && (
        <>
          {hour >= '07:00' && hour <= '09:30' && <ChecklistMorning />}
          {/* Aquí va la estrategia TAXI en caso de estar entre 9:30 y 9:45 */}
          {/* Puedes añadir más componentes condicionales según la hora */}
        </>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {assets.map(asset => (
          <div key={asset.name} className="bg-gray-800 rounded-2xl p-2 shadow">
            <h2 className="text-lg font-bold mb-2 text-center">{asset.name}</h2>
            <div className="aspect-w-16 aspect-h-9 mb-2">
              <iframe
                src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${asset.name}_1&symbol=${asset.symbol}&interval=5&theme=dark&style=1`}
                className="w-full h-64"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${asset.name}_2&symbol=${asset.symbol}&interval=5&theme=dark&style=3`}
                className="w-full h-64"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;


