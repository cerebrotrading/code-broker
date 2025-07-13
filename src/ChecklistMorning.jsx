// src/ChecklistMorning.jsx
import React from 'react';

function ChecklistMorning() {
  const lista = [
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
    <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
      <h3>🕖 Checklist previo a TAXI (7am – 9:30am)</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {lista.map((item, i) => (
          <li key={i} style={{ marginBottom: '6px' }}>✅ {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ChecklistMorning;


