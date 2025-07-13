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

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">CODE BROKER</h1>

      {!operative && (
        <div className="bg-red-700 text-white p-4 rounded-xl mb-4 shadow-lg">
          ⛔ Hoy no es un día operativo. Las estrategias están ocultas.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['META', 'NVDA', 'AMD'].map((ticker) => (
          <div key={ticker} className="bg-gray-800 rounded-2xl p-2 shadow">
            <h2 className="text-lg font-semibold mb-2">{ticker}</h2>
            <iframe
              src={`https://s.tradingview.com/embed-widget/mini-symbol-overview/?symbol=NASDAQ:${ticker}&locale=es#${ticker}`}
              width="100%"
              height="250"
              frameBorder="0"
              allowTransparency="true"
              scrolling="no"
              className="rounded-xl"
              title={`Chart-${ticker}`}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

