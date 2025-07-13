import React from 'react';

const activos = [
  { ticker: 'NASDAQ:META', nombre: 'META' },
  { ticker: 'NASDAQ:NVDA', nombre: 'NVDA' },
  { ticker: 'NASDAQ:AMD', nombre: 'AMD' },
];

const TradingViewWidget = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {activos.map(({ ticker, nombre }) => (
        <div
          key={ticker}
          className="bg-gray-800 p-2 rounded-xl shadow-md flex flex-col items-center"
        >
          <h3 className="text-lg font-semibold text-center mb-2">{nombre}</h3>
          <iframe
            src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${nombre}&symbol=${ticker}&interval=1&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=F1F3F6&studies=[]&theme=dark&style=1&timezone=Etc/UTC&withdateranges=1&hideideas=1&hide_side_toolbar=1&allow_symbol_change=1&details=0&hotlist=0&calendar=0`}
            width="100%"
            height="300"
            frameBorder="0"
            allowtransparency="true"
            scrolling="no"
            allowfullscreen=""
            className="rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default TradingViewWidget;

