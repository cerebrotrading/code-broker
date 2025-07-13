// src/TradingViewWidget.jsx
import React, { useEffect, useRef } from 'react';

function TradingViewWidget({ symbol }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: `NASDAQ:${symbol}`,
      width: "100%",
      height: "200",
      locale: "en",
      dateRange: "1D",
      colorTheme: "dark",
      trendLineColor: "#37a6ef",
      underLineColor: "rgba(55, 166, 239, 0.15)",
      isTransparent: false,
      autosize: true
    });

    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(script);
  }, [symbol]);

  return (
    <div style={{ marginBottom: '16px' }}>
      <h3>{symbol}</h3>
      <div ref={containerRef} />
    </div>
  );
}

export default TradingViewWidget;

