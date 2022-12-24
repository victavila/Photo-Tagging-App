import { useState, createContext, ReactNode } from "react";
import { StartGameContextProps } from "../types/types";

const StartGameContext = createContext<StartGameContextProps | null>(null);

const StartGameProvider = ({children}: {children: ReactNode}) => {
  const [hasGameStarted, setHasGameStarted] = useState(false);

  return (
    <StartGameContext.Provider value={{hasGameStarted, setHasGameStarted}}>
      {children}
    </StartGameContext.Provider>
  )
};

export {StartGameContext, StartGameProvider};