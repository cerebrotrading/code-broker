import React, { useState, useEffect } from 'react';

const isTradingDay = () => {
  const today = new Date();
  const day = today.getDay();
  return day >= 1 && day <= 5; // Monday to Friday
};

const CandleWidget = ({ symbol }) => (
  <iframe
    src={`https://s.tradingview.com/embed-widget/advanced-chart/?symbol=NASDAQ:${symbol}&theme=dark&style=1&interval=5&hide_top_toolbar=true&hide_legend=true`}
    width="100%"
    height="600"
    frameBorder="0"
    allowTransparency="true"
    scrolling="no"
    title={`Candle Chart ${symbol}`}
  ></iframe>
);

const PriceWidget = ({ symbol }) => (
  <iframe
    src={`https://s.tradingview.com/embed-widget/mini-symbol-overview/?symbol=NASDAQ:${symbol}&width=100%&height=150&locale=en&dateRange=1D&colorTheme=dark&trendLineColor=rgba(255,255,255,1)&underLineColor=rgba(0, 0, 0, 0)&isTransparent=false&autosize=true`}
    width="100%"
    height="350"
    frameBorder="0"
    allowTransparency="true"
    scrolling="no"
    title={`Price Chart ${symbol}`}
  ></iframe>
);

const AssetPanel = ({ name }) => (
  <div className="bg-gray-800 rounded-2xl p-4 shadow">
    <h2 className="text-xl font-bold mb-2">{name}</h2>
    <CandleWidget symbol={name} />
    <PriceWidget symbol={name} />
  </div>
);

const App = () => {
  const [isSimulated, setIsSimulated] = useState(false);
  const [isOperationalDay, setIsOperationalDay] = useState(isTradingDay());

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOperationalDay(isTradingDay());
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const showStrategy = isOperationalDay || isSimulated;

  const toggleSimulation = () => {
    setIsSimulated((prev) => !prev);
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold">CODE BROKER</h1>
          <p className="text-sm">📅 Hoy: {today}</p>
          {!isOperationalDay && !isSimulated && (
            <p className="text-red-500 font-semibold">⛔ Hoy no es un día operativo. Las estrategias están ocultas.</p>
          )}
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleSimulation}
        >
          {isSimulated ? '🛑 Salir de Simulación' : '▶️ Simulación'}
        </button>
      </div>

      {showStrategy && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AssetPanel name="META" />
          <AssetPanel name="NVDA" />
          <AssetPanel name="AMD" />
        </div>
      )}
    </div>
  );
};

export default App;

