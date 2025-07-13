import React, { useState, useEffect } from 'react';
import ChecklistMorning from './ChecklistMorning';

const assets = ['META', 'NVDA', 'AMD'];
const today = new Date();
const day = today.toLocaleDateString('en-US', { weekday: 'long' });

const isMarketDay = !['Saturday', 'Sunday'].includes(day); // solo lunes a viernes

const App = () => {
  const [simulacionActiva, setSimulacionActiva] = useState(false);
  const [mostrarEstrategia, setMostrarEstrategia] = useState(false);

  useEffect(() => {
    const now = new Date();
    const hora = now.getHours();
    const minutos = now.getMinutes();
    const isOperativo = isMarketDay && (hora >= 9 && (hora < 15 || (hora === 15 && minutos <= 30)));
    setMostrarEstrategia(isOperativo || simulacionActiva);
  }, [simulacionActiva]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">CODE BROKER</h1>
      <p className="text-sm mb-2">📅 Hoy: {day}</p>

      {!isMarketDay && !simulacionActiva && (
        <p className="text-yellow-400 mb-4">
          ⛔ Hoy no es un día operativo. Las estrategias están ocultas.
        </p>
      )}

      {(!isMarketDay || !mostrarEstrategia) && (
        <button
          onClick={() => setSimulacionActiva(!simulacionActiva)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mb-4"
        >
          {simulacionActiva ? '🔴 Salir de Simulación' : '🧪 Activar Simulación'}
        </button>
      )}

      <ChecklistMorning />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {assets.map((ticker) => (
          <div key={ticker} className="bg-gray-800 rounded-2xl p-2 shadow">
            <h2 className="text-xl font-semibold mb-2 text-center">{ticker}</h2>
            {/* Gráfico de velas */}
            <iframe
              src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${ticker}_candles&symbol=NASDAQ%3A${ticker}&interval=5&symboledit=1&saveimage=1&toolbarbg=f1f3f6&theme=dark&style=1&timezone=America%2FNew_York&studies=[]`}
              width="100%"
              height="250"
              frameBorder="0"
              allowTransparency={true}
              allowFullScreen={true}
              title={`Candlestick chart ${ticker}`}
              className="mb-2 rounded"
            />
            {/* Gráfico de precio */}
            <iframe
              src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${ticker}_price&symbol=NASDAQ%3A${ticker}&interval=5&symboledit=1&saveimage=1&toolbarbg=f1f3f6&theme=dark&style=2&timezone=America%2FNew_York`}
              width="100%"
              height="120"
              frameBorder="0"
              allowTransparency={true}
              allowFullScreen={true}
              title={`Line chart ${ticker}`}
              className="rounded"
            />
          </div>
        ))}
      </div>

      {mostrarEstrategia && (
        <div className="mt-6 bg-green-900 p-4 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">✅ Estrategia activa hoy</h2>
          <p className="text-sm">Se mostrarán aquí los datos de la estrategia TAXI al llegar las 9:30 a.m.</p>
        </div>
      )}
    </div>
  );
};

export default App;

