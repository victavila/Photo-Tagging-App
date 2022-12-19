import { useState, createContext, ReactNode } from "react";
import { DropdownContextProps } from "../types/types";

const DropdownContext = createContext<DropdownContextProps | null>(null);

const DropdownProvider = ({children}: {children: ReactNode}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{isDropdownOpen, setIsDropdownOpen}}>
      {children}
    </DropdownContext.Provider>
  )
};

export {DropdownContext, DropdownProvider};