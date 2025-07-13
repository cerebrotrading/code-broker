import React from 'react';

const Widget = ({ symbol, title }) => (
  <div className="bg-gray-800 rounded-2xl p-2 shadow">
    <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>

    <div className="mb-4">
      {/* Gráfico de velas */}
      <iframe
        src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_candles_${symbol}&symbol=${symbol}&interval=5&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1`}
        width="100%"
        height="300"
        frameBorder="0"
        allowTransparency="true"
        scrolling="no"
        title={`Candlestick - ${title}`}
      ></iframe>
    </div>

    <div>
      {/* Gráfico de precio en línea */}
      <iframe
        src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_price_${symbol}&symbol=${symbol}&interval=1&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=2&timezone=Etc%2FUTC&withdateranges=1`}
        width="100%"
        height="200"
        frameBorder="0"
        allowTransparency="true"
        scrolling="no"
        title={`Price - ${title}`}
      ></iframe>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">CODE BROKER</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Widget symbol="NASDAQ:META" title="META" />
        <Widget symbol="NASDAQ:NVDA" title="NVDA" />
        <Widget symbol="NASDAQ:AMD" title="AMD" />
      </div>
    </div>
  );
};

export default App;

