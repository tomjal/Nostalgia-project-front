import { GameGraphics } from "../../shared/enums";
import { IGame } from "../../store/types";

function filterHelper(array, filterValuesMap) {

  return [...array];
}

function filterHelper2d(array, filterValuesMap) {

  //sample for now
  return array.filter((game: IGame) => game.graphics == GameGraphics._2D)
}

export const FilterList: React.FC<{ games: IGame[] }> = ({ games }) => {

  let filteredGames = filterHelper(games, {});

  return (
    <>
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="max-w-4xl">
          {games.length} games
          {filteredGames?.map((game: IGame, index: number) => (
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