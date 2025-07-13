// src/App.jsx
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">CODE BROKER</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-2xl p-2 shadow">
          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_1&symbol=NASDAQ:META&interval=1&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=America%2FNew_York"
            width="100%"
            height="500"
            frameBorder="0"
            allowTransparency="true"
            scrolling="no"
            allowFullScreen
          ></iframe>
        </div>
        <div className="bg-gray-800 rounded-2xl p-2 shadow">
          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_2&symbol=NASDAQ:NVDA&interval=1&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=America%2FNew_York"
            width="100%"
            height="500"
            frameBorder="0"
            allowTransparency="true"
            scrolling="no"
            allowFullScreen
          ></iframe>
        </div>
        <div className="bg-gray-800 rounded-2xl p-2 shadow">
          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_3&symbol=NASDAQ:AMD&interval=1&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=America%2FNew_York"
            width="100%"
            height="500"
            frameBorder="0"
            allowTransparency="true"
            scrolling="no"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;

