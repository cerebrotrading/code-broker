import React from 'react';
import { AdvancedChart } from 'react-tradingview-embed';

const TradingViewWidget = ({ symbol }) => {
  return (
    <div className="w-full h-[500px]">
      <AdvancedChart
        widgetProps={{
          symbol: symbol,
          interval: '1',
          theme: 'dark',
          style: '1', // 1 = candle chart
          locale: 'en',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default TradingViewWidget;
