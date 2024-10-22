import axios from "axios";
import { BaseURL } from "../Utils/BaseURL";
import { IAllCharacter } from "./Interface/AllCharacter";
import { ICharacterByID } from "./Interface/CharacterByID";

export const characterService = {
  allCharactetrs: async () => {
    try {
      const resonse: IAllCharacter = await axios.get(`${BaseURL}/characters`);
      return resonse;
    } catch (error) {
      throw new Error("");
      ;
    }
  },
  charracterById: async (ids: number) => {
    try {
      const resonse: ICharacterByID = await axios.get(
        `${BaseURL}/characters/${ids}`
      );
      return resonse;
    } catch (error) {
      throw new Error("error");
    }
  },
};
