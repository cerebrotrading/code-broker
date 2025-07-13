// src/SimulacionContext.jsx
import React, { createContext, useState } from 'react';

export const SimulacionContext = createContext();

export function SimulacionProvider({ children }) {
  const [simulacionActiva, setSimulacionActiva] = useState(false);

  return (
    <SimulacionContext.Provider value={{ simulacionActiva, setSimulacionActiva }}>
      {children}
    </SimulacionContext.Provider>
  );
}
