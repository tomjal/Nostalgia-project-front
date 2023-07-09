import useStore from "../../store";
import { IGame } from "../../store/types";

export default function CatalogPage() {
  const store = useStore();
  const games: IGame[] = store.games;
  return (
    <>
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="max-w-4xl">
          <p className="text-3xl font-semibold">
            {games.length} games
          </p>
          <p>
            {games?.map((game: IGame, index: number) => (
              <div key={index}>
                <br />
                <h2>{index + 1}</h2>
                <h2>Title: {game.title}</h2>
                <p>Year: {game?.year||"--"}</p>
              </div>
            ))}
          </p>
        </div>
      </section>
    </>
  );
}