import React from 'react';

const TradingViewWidget = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {/* META */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="text-center font-bold text-lg text-black py-2">META</div>
        <iframe
          className="w-full"
          style={{ height: "450px" }}
          src="https://s.tradingview.com/widgetembed/?symbol=NASDAQ:META&interval=5&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=America%2FNew_York&withdateranges=1&hideideas=1&studies_overrides={}"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* NVDA */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="text-center font-bold text-lg text-black py-2">NVDA</div>
        <iframe
          className="w-full"
          style={{ height: "450px" }}
          src="https://s.tradingview.com/widgetembed/?symbol=NASDAQ:NVDA&interval=5&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=America%2FNew_York&withdateranges=1&hideideas=1&studies_overrides={}"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* AMD */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="text-center font-bold text-lg text-black py-2">AMD</div>
        <iframe
          className="w-full"
          style={{ height: "450px" }}
          src="https://s.tradingview.com/widgetembed/?symbol=NASDAQ:AMD&interval=5&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=America%2FNew_York&withdateranges=1&hideideas=1&studies_overrides={}"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TradingViewWidget;

