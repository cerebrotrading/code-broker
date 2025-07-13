import React, { useState, useEffect } from 'react';
import ScheduleInfo from './ScheduleInfo';
import ChecklistMorning from './ChecklistMorning';

const App = () => {
  const [simulacionActiva, setSimulacionActiva] = useState(false);

  // 🔁 Activar simulación automáticamente si es día hábil entre 7:00 y 15:30
  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    const isWeekday = now.getDay() >= 1 && now.getDay() <= 5;

    if (isWeekday && hour >= 7 && hour <= 15) {
      setSimulacionActiva(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">CODE BROKER</h1>
      <ScheduleInfo />

      {simulacionActiva ? (
        <>
          <p className="mb-4">🟢 <strong>Simulación Activa</strong></p>
          <p className="mb-2">Simulación en Curso</p>
          <p>Aquí puedes ver el estado simulado de los activos:</p>
          <ul className="list-disc list-inside mb-6">
            <li><strong>META</strong> – simulación de precio activa</li>
            <li><strong>NVDA</strong> – monitoreo en curso</li>
            <li><strong>AMD</strong> – estrategia inactiva</li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg">📈 META – Gráfico simulado</div>
            <div className="bg-gray-800 p-4 rounded-lg">📊 NVDA – Gráfico simulado</div>
            <div className="bg-gray-800 p-4 rounded-lg">📉 AMD – Gráfico simulado</div>
          </div>
        </>
      ) : (
        <p className="mb-6">🔁 Modo Simulación</p>
      )}

      <ChecklistMorning />
    </div>
  );
};

export default App;

