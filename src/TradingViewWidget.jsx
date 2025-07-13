// src/TradingViewWidget.jsx
import React from 'react';

function TradingViewWidget({ symbol }) {
  const src = `https://s.tradingview.com/embed-widget/symbol-overview/?locale=en#%7B%22symbols%22%3A%5B%5B%22NASDAQ%3A${symbol}%22%5D%5D%2C%22width%22%3A%22100%25%22%2C%22height%22%3A250%2C%22isTransparent%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22autosize%22%3Atrue%7D`;

  return (
    <div style={{ flex: 1, padding: '10px' }}>
      <iframe
        src={src}
        width="100%"
        height="250"
        frameBorder="0"
        allowTransparency="true"
        scrolling="no"
        title={`TradingView ${symbol}`}
      ></iframe>
    </div>
  );
}

export default TradingViewWidget;
