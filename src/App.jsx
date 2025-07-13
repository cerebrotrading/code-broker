import React, { useState } from 'react';
import ChecklistMorning from './ChecklistMorning';

const today = new Date();
const day = today.toLocaleDateString('en-US', { weekday: 'long' });
const hour = today.getHours();

const isWeekday = today.getDay() >= 1 && today.getDay() <= 5;
const isMarketTime = hour >= 9 && hour < 16;
const isPreTaxi = hour >= 7 && (hour < 9 || (hour === 9 && today.getMinutes() < 30));

const App = () => {
  const [showSim, setShowSim] = useState(false);

  const handleToggleSim = () => {
    setShowSim(!showSim);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-2">CODE BROKER</h1>
      <p className="text-sm mb-4">📅 Hoy: {day}</p>

      {isWeekday ? (
        <>
          {(isPreTaxi || showSim) && <ChecklistMorning />}
          <div className="mt-4">
            {isMarketTime || isPreTaxi || showSim ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {['META', 'NVDA', 'AMD'].map((ticker) => (
                  <div key={ticker} className="bg-gray-800 rounded-2xl p-2 shadow">
                    <h2 className="text-xl font-bold mb-2">{ticker}</h2>
                    <div className="mb-2">
                      <iframe
                        src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${ticker}_candles&symbol=NASDAQ%3A${ticker}&interval=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=Etc%2FUTC`}
                        width="100%"
                        height="300"
                        allowFullScreen
                      />
                    </div>
                    <div>
                      <iframe
                        src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${ticker}_price&symbol=NASDAQ%3A${ticker}&interval=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=2&timezone=Etc%2FUTC`}
                        width="100%"
                        height="150"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-yellow-400 mt-4">⏳ Fase previa (antes de 9:30 a.m.)</p>
            )}
          </div>
          {!isMarketTime && (
            <button
              onClick={handleToggleSim}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl shadow"
            >
              {showSim ? '🔒 Salir de simulación' : '🧪 Activar simulación'}
            </button>
          )}
        </>
      ) : (
        <p className="text-red-400 text-lg mt-4">
          ⛔ Hoy no es un día operativo. Las estrategias están ocultas.
        </p>
      )}
    </div>
  );
};

export default App;

