import { create } from "zustand";
import { IGame } from "./types";

type Store = {
  username: string;
  games: IGame[];
  requestLoading: boolean;
  addGame: (game: IGame) => void;
  addGames: (games: [IGame]) => void;
  replaceGames: (games: [IGame]) => void;
  setRequestLoading: (isLoading: boolean) => void;
};

const useStore = create<Store>((set) => ({
  username: "Guest access",
  games: [],
  requestLoading: false,
  addGame: (game: IGame) =>
    set((state) =>
      ({ ...state, games: [...state.games, game] })),
  addGames: (games: [IGame]) =>
    set((state) =>
      ({ ...state, games: [...state.games, ...games] })),
  replaceGames: (games: [IGame]) =>
    set((state) =>
      ({ ...state, games: [...games] })),
  setRequestLoading: (isLoading) =>
    set((state) =>
      ({ ...state, requestLoading: isLoading })),
}));

export default useStore;
