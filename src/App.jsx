import React from 'react';

const CandleChart = ({ symbol }) => (
  <iframe
    src={`https://s.tradingview.com/embed-widget/advanced-chart/?symbol=NASDAQ:${symbol}&theme=dark&style=1&interval=5&hide_legend=true&hide_side_toolbar=false&allow_symbol_change=false`}
    style={{ width: "100%", height: "300px", border: "none" }}
    allowTransparency="true"
    scrolling="no"
    allowFullScreen
    title={`Candle Chart ${symbol}`}
  ></iframe>
);

const LineChart = ({ symbol }) => (
  <iframe
    src={`https://s.tradingview.com/embed-widget/mini-symbol-overview/?symbol=NASDAQ:${symbol}&locale=en&theme=dark`}
    style={{ width: "100%", height: "150px", border: "none" }}
    allowTransparency="true"
    scrolling="no"
    allowFullScreen
    title={`Line Chart ${symbol}`}
  ></iframe>
);

const AssetPanel = ({ symbol }) => (
  <div className="bg-gray-800 rounded-2xl p-2 shadow">
    <h2 className="text-lg font-semibold mb-2">{symbol}</h2>
    <CandleChart symbol={symbol} />
    <div className="mt-2">
      <LineChart symbol={symbol} />
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">CODE BROKER</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AssetPanel symbol="META" />
        <AssetPanel symbol="NVDA" />
        <AssetPanel symbol="AMD" />
      </div>
    </div>
  );
};

export default App;

