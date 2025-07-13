import React from 'react';

function ChecklistMorning() {
  const items = [
    'Encender plataforma CODE BROKER',
    'Validar conexión a TradingView-CEREBRO',
    'Confirmar horario institucional (mercado abierto)',
    'Verificar si es día operativo o feriado',
    'Consultar osciladores en META, NVDA y AMD',
    'Evaluar señal institucional con fuerza relativa',
    'Confirmar reglas de entrada activas en CEREBRO',
    'Elegir activo más fuerte para TAXI',
    'Registrar activo en eToro (sin SL/TP)',
    'Prepararse para ejecución de TAXI (9:30 a.m.)',
  ];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">🕖 Checklist previo a TAXI (7am – 9:30am)</h2>
      <ul className="list-disc pl-6 space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-green-600">✅ {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ChecklistMorning;


