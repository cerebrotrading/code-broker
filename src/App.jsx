import React from 'react';

const TradingViewWidget = ({ symbol }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow">
      <iframe
        src={`https://s.tradingview.com/embed-widget/mini-symbol-overview/?symbol=NASDAQ:${symbol}&locale=en#%7B%7D`}
        style={{
          width: "100%",
          height: "300px",
          border: "none",
        }}
        allowTransparency="true"
        scrolling="no"
        allowFullScreen
        title={`TradingView ${symbol}`}
      ></iframe>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">CODE BROKER</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-2xl p-2 shadow">
          <h2 className="text-lg font-semibold mb-2">META</h2>
          <TradingViewWidget symbol="META" />
        </div>
        <div className="bg-gray-800 rounded-2xl p-2 shadow">
          <h2 className="text-lg font-semibold mb-2">NVDA</h2>
          <TradingViewWidget symbol="NVDA" />
        </div>
        <div className="bg-gray-800 rounded-2xl p-2 shadow">
          <h2 className="text-lg font-semibold mb-2">AMD</h2>
          <TradingViewWidget symbol="AMD" />
        </div>
      </div>
    </div>
  );
};

export default App;

