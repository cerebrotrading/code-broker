import React, { createContext, useState } from 'react';

export const SimulacionContext = createContext();

export function SimulacionProvider({ children }) {
  const [simulacionActiva, setSimulacionActiva] = useState(false);

  const toggleSimulacion = () => {
    setSimulacionActiva((prev) => !prev);
  };

  return (
    <SimulacionContext.Provider value={{ simulacionActiva, toggleSimulacion }}>
      {children}
    </SimulacionContext.Provider>
  );
}
