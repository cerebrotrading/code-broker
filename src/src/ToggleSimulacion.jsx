import React, { useContext } from "react";
import { SimulacionContext } from "./SimulacionContext";

const ToggleSimulacion = () => {
  const { simulacionActiva, toggleSimulacion } = useContext(SimulacionContext);

  return (
    <button
      onClick={toggleSimulacion}
      className={`px-4 py-2 rounded-xl font-semibold shadow-md transition ${
        simulacionActiva
          ? "bg-green-600 hover:bg-green-700"
          : "bg-gray-700 hover:bg-gray-800"
      }`}
    >
      {simulacionActiva ? "🟢 Simulación Activa" : "🔁 Modo Simulación"}
    </button>
  );
};

export default ToggleSimulacion;
