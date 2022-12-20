import { CharacterLocationsProps } from "../types/types";

const characterLocations: CharacterLocationsProps = {
  "samus": {"x-start": 0.83, "x-end": 0.88, "y-start": 0.52, "y-end": 0.56}, 
  "toad": {"x-start": 0.33, "x-end": 0.35, "y-start": 0.44, "y-end": 0.45}, 
  "link": {"x-start": 0.65, "x-end": 0.69, "y-start": 0.65, "y-end": 0.67}
};

const horizontalCheck = (x: number, character: keyof CharacterLocationsProps): boolean => {
  if (x >= characterLocations[character]["x-start"] && x <= characterLocations[character]["x-end"]) {
    return true;
  } else {
    return false;
  }
};

const verticalCheck = (y: number, character: keyof CharacterLocationsProps): boolean => {
  if (y >= characterLocations[character]["y-start"] && y <= characterLocations[character]["y-end"]) {
    return true;
  } else {
    return false;
  }
};

export {horizontalCheck, verticalCheck};