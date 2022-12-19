export interface DropdownMenuProps {
  x: number;
  y: number
};

export interface DropdownContextProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
};