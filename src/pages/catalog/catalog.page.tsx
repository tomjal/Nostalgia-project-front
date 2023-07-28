import useSWR from "swr";
import useStore from "../../store";
import { IGame } from "../../store/types";
import { fetcher } from "../../shared/fetcher";
import { FilterList } from "./filterList";
import { Suspense } from "react";

const API_ADDRESS_GAMES = "http://localhost:3000/games";

export default function CatalogPage() {
  // const store = useStore();
  // let games: IGame[] = [];
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
    <Suspense fallback={<div>loading......</div>}>
      <FilterList games={data} />
    </Suspense>
  );
}