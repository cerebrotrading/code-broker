import React from "react";
import { useSimulacion } from "./SimulacionContext";

const ChecklistMorning = () => {
  const { simulacionActiva } = useSimulacion();

  const checklistItems = [
    "Encender plataforma CODE BROKER",
    "Validar conexión a TradingView-CEREBRO",
    "Confirmar horario institucional (mercado abierto)",
    "Verificar si es día operativo o feriado",
    "Consultar osciladores en META, NVDA y AMD",
    "Evaluar señal institucional con fuerza relativa",
    "Confirmar reglas de entrada activas en CEREBRO",
    "Elegir activo más fuerte para TAXI",
    "Registrar activo en eToro (sin SL/TP)",
    "Prepararse para ejecución de TAXI (9:30 a.m.)",
  ];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold text-white mb-2">
        🕖 Checklist previo a TAXI (7am – 9:30am)
      </h2>
      <ul className="list-none text-sm text-gray-200">
        {checklistItems.map((item, index) => (
          <li key={index} className="mb-1">
            ✅ {item}
          </li>
        ))}
      </ul>

      {simulacionActiva && (
        <div className="mt-4 text-green-400 font-semibold">
          🟢 Modo simulación activo – checklist completado en entorno simulado.
        </div>
      )}
    </div>
  );
};

export default ChecklistMorning;


