import { createContext, useState, useEffect } from "react";

const Context = createContext({});

const Provider = ({ children }) => {
  const titleData = "Bored Of HTML & CSS? Try Something New.";


  return (
    <Context.Provider
      value={{
        titleData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
