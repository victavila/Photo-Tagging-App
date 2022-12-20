import { useState, createContext, ReactNode } from "react";
import { SamusContextProps } from "../types/types";

const SamusContext = createContext<SamusContextProps | null>(null);

const SamusProvider = ({children}: {children: ReactNode}) => {
  const [wasSamusFound, setWasSamusFound] = useState(false);

  return (
    <SamusContext.Provider value={{wasSamusFound, setWasSamusFound}}>
      {children}
    </SamusContext.Provider>
  )
};

export {SamusContext, SamusProvider};