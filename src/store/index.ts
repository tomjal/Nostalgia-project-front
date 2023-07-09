import { create } from "zustand";
import { IGame } from "./types";

type Store = {
  username: string;
  games: IGame[];
  requestLoading: boolean;
  addGame: (games: IGame) => void;
  setRequestLoading: (isLoading: boolean) => void;
};

const useStore = create<Store>((set) => ({
  username: "John Doe",
  games: [],
  requestLoading: false,
  addGame: (game) =>
    set((state) =>
      ({ ...state, games: [...state.games, game] })),
  setRequestLoading: (isLoading) =>
    set((state) =>
      ({ ...state, requestLoading: isLoading })),
}));

export default useStore;
