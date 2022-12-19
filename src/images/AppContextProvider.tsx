import { ReactNode } from "react";
import { DropdownProvider } from "../contexts/DropdownContext";

const AppContextProvider = ({ children }: {children: ReactNode}) => {
  return (
    <DropdownProvider>
      {children}
    </DropdownProvider>
  )
};

export default AppContextProvider;