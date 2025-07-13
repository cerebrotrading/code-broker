import React, { useEffect, useState } from 'react';

const checklistItems = [
  "✅ Confirmar que hoy es un día operativo (lunes a viernes).",
  "✅ Validar que no es día festivo en EE.UU.",
  "✅ Revisar los osciladores institucionales (META, NVDA, AMD).",
  "✅ Confirmar fuerza relativa y tendencias mayores.",
  "✅ Determinar el activo más fuerte para ejecutar TAXI.",
  "✅ Validar apertura del mercado sin GAP anormal.",
  "✅ Revisar ATR para ajustar el SL táctico.",
];

const ChecklistMorning = () => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prev) => (prev < checklistItems.length - 1 ? prev + 1 : prev));
    }, 30000); // muestra un ítem cada 30 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 rounded-2xl p-4 shadow mt-4">
      <h2 className="text-xl font-bold mb-2">Checklist previo a TAXI (7am a 9:30am)</h2>
      <ul className="list-disc list-inside text-sm">
        {checklistItems.slice(0, currentItem + 1).map((item, index) => (
          <li key={index} className="mb-1">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChecklistMorning;

