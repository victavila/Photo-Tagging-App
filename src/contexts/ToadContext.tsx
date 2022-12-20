import { useState, createContext, ReactNode } from "react";
import { ToadContextProps } from "../types/types";

const ToadContext = createContext<ToadContextProps | null>(null);

const ToadProvider = ({children}: {children: ReactNode}) => {
  const [wasToadFound, setWasToadFound] = useState(false);

  return (
    <ToadContext.Provider value={{wasToadFound, setWasToadFound}}>
      {children}
    </ToadContext.Provider>
  )
};

export {ToadContext, ToadProvider};