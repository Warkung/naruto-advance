import { create } from "zustand";

import { ICharacterData } from "../service/Interface/AllCharacter";

interface CharacterType {
  data: ICharacterData[];
  loading: boolean;
  error: null;
}
interface UseCharStore {
  char?: CharacterType;
  fetchChar?: CharacterType;
  setChar: (value: CharacterType) => void;
  setFetchChar: (value: CharacterType) => void;
}

const initChar = {
  Char: { data: [], loading: false, error: null },
  fetchChar: { data: [], loading: false, error: null },
};

export const usePokemonStore = create<UseCharStore>((set) => ({
  ...initChar,
  setChar: (value: CharacterType) => set({ char: value }),
  setFetchChar: (value: CharacterType) => set({ fetchChar: value }),
}));
