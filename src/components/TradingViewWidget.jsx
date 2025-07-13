import { useEffect, useRef } from "react";

export default function TradingViewWidget({ symbol }) {
  const containerRef = useRef(null);
  const containerId = `tradingview-${symbol}`;

  useEffect(() => {
    const scriptId = "tradingview-widget-script";

    const renderWidget = () => {
      if (window.TradingView && containerRef.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: `NASDAQ:${symbol}`,
          interval: "1",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1", // estilo de velas
          locale: "es",
          container_id: containerId,
        });
      }
    };

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = renderWidget;
      document.body.appendChild(script);
    } else {
      renderWidget();
    }
  }, [symbol, containerId]);

  return (
    <div className="bg-zinc-900 rounded-2xl p-2 shadow w-full h-[400px]">
      <h2 className="text-white text-center font-semibold mb-2">
        📊 {symbol} – Gráfico oficial
      </h2>
      <div ref={containerRef} id={containerId} className="w-full h-full" />
    </div>
  );
}
