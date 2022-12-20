import React from "react";

export interface DropdownMenuProps {
  x: number;
  y: number
};

export interface DropdownContextProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface CharacterLocationsProps {
  samus: {
    "x-start": number;
    "x-end": number;
    "y-start": number;
    "y-end": number;
  };
  toad: {
    "x-start": number;
    "x-end": number;
    "y-start": number;
    "y-end": number;
  };
  link: {
    "x-start": number;
    "x-end": number;
    "y-start": number;
    "y-end": number;
  };
};

export interface LinkContextProps {
  wasLinkFound: boolean;
  setWasLinkFound: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface SamusContextProps {
  wasSamusFound: boolean;
  setWasSamusFound: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface ToadContextProps {
  wasToadFound: boolean;
  setWasToadFound: React.Dispatch<React.SetStateAction<boolean>>;
};