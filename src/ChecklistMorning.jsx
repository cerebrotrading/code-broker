import React, { useEffect, useState } from 'react';

const ChecklistMorning = () => {
  const checklistItems = [
    '✅ Encender plataforma CODE BROKER',
    '✅ Validar conexión a TradingView-CEREBRO',
    '✅ Confirmar horario institucional (mercado abierto)',
    '✅ Verificar si es día operativo o feriado',
    '✅ Consultar osciladores en META, NVDA y AMD',
    '✅ Evaluar señal institucional con fuerza relativa',
    '✅ Confirmar reglas de entrada activas en CEREBRO',
    '✅ Elegir activo más fuerte para TAXI',
    '✅ Registrar activo en eToro (sin SL/TP)',
    '✅ Prepararse para ejecución de TAXI (9:30 a.m.)',
  ];

  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    if (currentItem < checklistItems.length - 1) {
      const interval = setInterval(() => {
        setCurrentItem((prev) => prev + 1);
      }, 10000); // muestra 1 nuevo ítem cada 10 segundos
      return () => clearInterval(interval);
    }
  }, [currentItem]);

  return (
    <div className="bg-gray-800 rounded-2xl p-4 shadow mt-6">
      <h2 className="text-xl font-bold mb-4">🕖 Checklist previo a TAXI (7am – 9:30am)</h2>
      <ul className="list-disc list-inside text-sm space-y-1">
        {checklistItems.slice(0, currentItem + 1).map((item, index) => (
          <li key={index} className="text-green-400">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChecklistMorning;

