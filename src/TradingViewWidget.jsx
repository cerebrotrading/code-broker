// src/TradingViewWidget.jsx
import React, { useEffect, useRef } from 'react';

function TradingViewWidget({ symbol }) {
  const containerRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          container_id: containerRef.current.id,
          width: '100%',
          height: 400,
          symbol: `NASDAQ:${symbol}`,
          interval: '1',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1', // velas
          locale: 'es',
          toolbar_bg: '#f1f3f6',
          hide_top_toolbar: true,
          save_image: false,
        });
      }
    };
    document.body.appendChild(script);
  }, [symbol]);

  return <div id={`tv-${symbol}`} ref={containerRef} style={{ marginBottom: '30px' }} />;
}

export default TradingViewWidget;

