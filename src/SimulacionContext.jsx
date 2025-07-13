// src/SimulacionContext.jsx
import React, { createContext, useState, useContext } from 'react';

const SimulacionContext = createContext();

export const SimulacionProvider = ({ children }) => {
  const [isSimulacionActiva, setIsSimulacionActiva] = useState(false);

  const toggleSimulacion = () => {
    setIsSimulacionActiva((prev) => !prev);
  };

  return (
    <SimulacionContext.Provider value={{ isSimulacionActiva, toggleSimulacion }}>
      {children}
    </SimulacionContext.Provider>
  );
};

export const useSimulacion = () => useContext(SimulacionContext);
