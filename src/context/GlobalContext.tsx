/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => (
  <GlobalContext.Provider value={{ }}>
    {children}
  </GlobalContext.Provider>
);

export const useGlobalContext = () => useContext(GlobalContext);
