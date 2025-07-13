import React from "react";
import ScheduleInfo from "./components/ScheduleInfo";

const TradingViewWidget = ({ symbol, candle = false }) => {
  const src = `https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#{
    encodeURIComponent(
      JSON.stringify({
        symbol: `NASDAQ:${symbol}`,
        width: "100%",
        height: candle ? 300 : 200,
        locale: "en",
        dateRange: candle ? "1D" : "12h",
        colorTheme: "dark",
        isTransparent: false,
        autosize: true,
        chartOnly: false,
        scalePosition: "right",
        scaleMode: 1,
        fontFamily: "Arial",
        noTimeScale: false,
        chartType: candle ? "candlesticks" : "area",
        lineWidth: 2,
        upColor: "#22c55e",
        downColor: "#ef4444",
        borderUpColor: "#22c55e",
        borderDownColor: "#ef4444",
        wickUpColor: "#22c55e",
        wickDownColor: "#ef4444",
      })
    )
  }`;

  return (
    <div className="rounded-xl overflow-hidden shadow-md border border-gray-700 my-2">
      <iframe
        title={`TradingView ${symbol}`}
        src={src}
        frameBorder="0"
        className="w-full"
        style={{ height: candle ? 300 : 200 }}
        allowFullScreen
      />
    </div>
  );
};

const AssetCard = ({ name }) => (
  <div className="bg-gray-800 rounded-2xl p-4 shadow">
    <h2 className="text-lg font-semibold mb-2 text-center">{name}</h2>
    <TradingViewWidget symbol={name} candle />
    <TradingViewWidget symbol={name} candle={false} />
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-2">CODE BROKER</h1>

      <ScheduleInfo />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <AssetCard name="META" />
        <AssetCard name="NVDA" />
        <AssetCard name="AMD" />
      </div>
    </div>
  );
};

export default App;

