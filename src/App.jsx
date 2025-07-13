import React from 'react';
import { SimulacionProvider } from './SimulacionContext';
import ToggleSimulacion from './ToggleSimulacion';
import ChecklistMorning from './ChecklistMorning';
import TradingViewWidget from './TradingViewWidget';
import ScheduleInfo from './ScheduleInfo';

function App() {
  return (
    <SimulacionProvider>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">CODE BROKER</h1>
        <ScheduleInfo />
        <ToggleSimulacion />

        {/* Gráficos oficiales - solo aquí */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
          <TradingViewWidget symbol="META" />
          <TradingViewWidget symbol="NVDA" />
          <TradingViewWidget symbol="AMD" />
        </div>

        <ChecklistMorning />
      </div>
    </SimulacionProvider>
  );
}

export default App;

