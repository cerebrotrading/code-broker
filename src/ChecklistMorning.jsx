// src/ChecklistMorning.jsx
import React from 'react';
import TradingViewWidget from './TradingViewWidget';

function ChecklistMorning() {
  return (
    <div className="checklist">
      <h2>🕖 Checklist previo a TAXI (7am – 9:30am)</h2>
      <ul>
        <li>✅ Encender plataforma CODE BROKER</li>
        <li>✅ Validar conexión a TradingView-CEREBRO</li>
        <li>✅ Confirmar horario institucional (mercado abierto)</li>
        <li>✅ Verificar si es día operativo o feriado</li>
        <li>✅ Consultar osciladores en META, NVDA y AMD</li>
        <li>✅ Evaluar señal institucional con fuerza relativa</li>
        <li>✅ Confirmar reglas de entrada activas en CEREBRO</li>
        <li>✅ Elegir activo más fuerte para TAXI</li>
        <li>✅ Registrar activo en eToro (sin SL/TP)</li>
        <li>✅ Prepararse para ejecución de TAXI (9:30 a.m.)</li>
      </ul>

      <div className="graficos">
        <TradingViewWidget symbol="META" />
        <TradingViewWidget symbol="NVDA" />
        <TradingViewWidget symbol="AMD" />
      </div>
    </div>
  );
}

export default ChecklistMorning;


