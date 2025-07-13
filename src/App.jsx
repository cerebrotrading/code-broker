import React, { useEffect, useState } from 'react';

const isOperativeDay = () => {
  const now = new Date();
  const day = now.getUTCDay(); // 0 = domingo, 6 = sábado
  return day >= 1 && day <= 5; // lunes a viernes
};

const App = () => {
  const [operative, setOperative] = useState(true);

  useEffect(() => {
    setOperative(isOperativeDay());
  }, []);

  const tickers = ['META', 'NVDA', 'AMD'];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">CODE BROKER</h1>

      {!operative && (
        <div className="bg-red-700 text-white p-4 rounded-xl mb-4 shadow-lg">
          ⛔ Hoy no es un día operativo. Las estrategias están ocultas.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tickers.map((ticker) => (
          <div key={ticker} className="bg-gray-800 rounded-2xl p-2 shadow">
            <h2 className="text-lg font-semibold mb-2">{ticker}</h2>
            <iframe
              src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${ticker}&symbol=NASDAQ:${ticker}&interval=5&theme=dark&style=1&locale=es&toolbarbg=F1F3F6`}
              width="100%"
              height="400"
              frameBorder="0"
              allowTransparency="true"
              scrolling="no"
              title={`TradingView-${ticker}`}
              className="rounded-xl"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

