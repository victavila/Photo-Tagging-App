import { ReactNode } from "react";
import { DropdownProvider } from "../contexts/DropdownContext";
import { LinkProvider } from "../contexts/LinkContext";
import { SamusProvider } from "../contexts/SamusContext";
import { ToadProvider } from "../contexts/ToadContext";

const AppContextProvider = ({ children }: {children: ReactNode}) => {
  return (
    <DropdownProvider>
      <LinkProvider>
        <SamusProvider>
          <ToadProvider>
            {children}
          </ToadProvider>
        </SamusProvider>
      </LinkProvider>
    </DropdownProvider>
  )
};

export default AppContextProvider;