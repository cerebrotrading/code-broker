import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-6">CODE BROKER</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-2xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">META</h2>
          <iframe
            src="https://www.tradingview.com/widgetembed/?symbol=NASDAQ:META&interval=1&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=F1F3F6&studies=[]&theme=dark&style=1&timezone=America%2FNew_York"
            width="100%"
            height="400"
            allowTransparency={true}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
        <div className="bg-gray-800 rounded-2xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">NVDA</h2>
          <iframe
            src="https://www.tradingview.com/widgetembed/?symbol=NASDAQ:NVDA&interval=1&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=F1F3F6&studies=[]&theme=dark&style=1&timezone=America%2FNew_York"
            width="100%"
            height="400"
            allowTransparency={true}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
        <div className="bg-gray-800 rounded-2xl p-4 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">AMD</h2>
          <iframe
            src="https://www.tradingview.com/widgetembed/?symbol=NASDAQ:AMD&interval=1&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=F1F3F6&studies=[]&theme=dark&style=1&timezone=America%2FNew_York"
            width="100%"
            height="400"
            allowTransparency={true}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;
