import React, { useEffect, useRef } from 'react';

const TradingViewWidget = ({ symbol = "NASDAQ:META", height = "400" }) => {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          autosize: true,
          symbol: symbol,
          interval: "5",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "es",
          toolbar_bg: "#1e1e1e",
          enable_publishing: false,
          container_id: container.current.id,
        });
      }
    };

    container.current.innerHTML = ""; // limpiar previo
    container.current.appendChild(script);
  }, [symbol]);

  return (
    <div style={{ height: `${height}px` }}>
      <div id={`tv-container-${symbol}`} ref={container} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default TradingViewWidget;
