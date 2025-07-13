import React from "react";
import ChecklistMorning from "./ChecklistMorning";
import ScheduleInfo from "./ScheduleInfo";
import { SimulacionProvider } from "./SimulacionContext";
import ToggleSimulacion from "./ToggleSimulacion";
import TradingViewWidget from "./components/TradingViewWidget";

export default function App() {
  return (
    <SimulacionProvider>
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">CODE BROKER</h1>
        <div className="flex justify-between items-center mb-4">
          <ScheduleInfo />
          <ToggleSimulacion />
        </div>

        <ChecklistMorning />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-center">META</h2>
            <TradingViewWidget symbol="NASDAQ:META" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-center">NVDA</h2>
            <TradingViewWidget symbol="NASDAQ:NVDA" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-center">AMD</h2>
            <TradingViewWidget symbol="NASDAQ:AMD" />
          </div>
        </div>
      </div>
    </SimulacionProvider>
  );
}


