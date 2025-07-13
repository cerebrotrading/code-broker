import React from 'react';
import ScheduleInfo from './ScheduleInfo';
import ChecklistMorning from './ChecklistMorning';
import TradingViewWidget from './TradingViewWidget';
import { SimulacionProvider, useSimulacion } from './SimulacionContext';
import ToggleSimulacion from './ToggleSimulacion'; // ✅ IMPORTACIÓN CORRECTA

function ContenidoSimulado() {
  const { simulacionActiva } = useSimulacion();

  return (
    <div className="mt-4 space-y-2">
      {simulacionActiva && (
        <>
          <p className="text-green-500 font-semibold">🟢 Simulación Activa</p>
          <p className="text-sm text-gray-300">Simulación en Curso</p>
          <ul className="text-sm list-disc list-inside">
            <li><strong>META</strong> – simulación de precio activa</li>
            <li><strong>NVDA</strong> – monitoreo en curso</li>
            <li><strong>AMD</strong> – estrategia inactiva</li>
          </ul>
        </>
      )}
    </div>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-2">CODE BROKER</h1>
      <ScheduleInfo />
      <ToggleSimulacion />
      <ContenidoSimulado />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <TradingViewWidget symbol="NASDAQ:META" />
        <TradingViewWidget symbol="NASDAQ:NVDA" />
        <TradingViewWidget symbol="NASDAQ:AMD" />
      </div>
      <ChecklistMorning />
    </div>
  );
}

export default function App() {
  return (
    <SimulacionProvider>
      <AppContent />
    </SimulacionProvider>
  );
}

