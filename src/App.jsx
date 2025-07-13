import React from "react";
import ScheduleInfo from "./ScheduleInfo";
import ChecklistMorning from "./ChecklistMorning";
import TradingViewWidget from "./components/TradingViewWidget";
import { SimulacionProvider } from "./SimulacionContext";
import ToggleSimulacion from "./ToggleSimulacion";

const App = () => {
  return (
    <SimulacionProvider>
      <div className="min-h-screen bg-black text-white p-4">
        <h1 className="text-2xl font-bold text-center mb-4">CODE BROKER</h1>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-4">
          <ScheduleInfo />
          <ToggleSimulacion />
        </div>

        <ChecklistMorning />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-900 p-2 rounded-xl shadow">
            <h2 className="text-center text-md mb-2">📈 META – Gráfico oficial</h2>
            <TradingViewWidget symbol="META" />
          </div>

          <div className="bg-gray-900 p-2 rounded-xl shadow">
            <h2 className="text-center text-md mb-2">📊 NVDA – Gráfico oficial</h2>
            <TradingViewWidget symbol="NVDA" />
          </div>

          <div className="bg-gray-900 p-2 rounded-xl shadow">
            <h2 className="text-center text-md mb-2">📉 AMD – Gráfico oficial</h2>
            <TradingViewWidget symbol="AMD" />
          </div>
        </div>
      </div>
    </SimulacionProvider>
  );
};

export default App;

