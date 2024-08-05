import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [future, setFuture] = useState('someFutureValue'); // Example state

  return (
    <AppContext.Provider value={{ future, setFuture }}>
      {children}
    </AppContext.Provider>
  );
};
