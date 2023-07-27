import useSWR from "swr";
import useStore from "../../store";
import { IGame } from "../../store/types";
import { fetcher } from "../../shared/fetcher";

const API_ADDRESS_GAMES = "http://localhost:3000/games";

export default function CatalogPage() {
  const store = useStore();
  // const games: IGame[] = store.games;
  const { data, error, isLoading } = useSWR(
    API_ADDRESS_GAMES,
    fetcher
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="max-w-4xl">
          {data?.length} games
          {data?.map((game: IGame, index: number) => (
            <div key={index}>
              <br />
              <h2>Num {index + 1}</h2>
              {game.picturesLinks?.length ?
                <img src={game.picturesLinks?.[0]}
                  style={{ width: '300px', height: '200px', objectFit: 'none', borderRadius: '25px' }}
                /> : "--"}
              Title: {game.title}<br />
              Year: {game?.year || "--"}<br />
              description: {game?.description || "--"}<br />
              genre: {game?.genre || "--"}<br />
              platform: {game?.platform || "--"}<br />
              graphics: {game?.graphics || "--"}<br />
              framerate: {game?.framerate || "--"}<br />
              controller: {game?.controller || "--"}<br />
              second monitor: {game?.externalMonitor || "--"}<br />
              steamDB: {game?.steamDbLink ? <a href={game?.steamDbLink}>Link</a> : "--"}<br />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}