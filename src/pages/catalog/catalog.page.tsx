import useSWR from "swr";
import useStore from "../../store";
import { IGame } from "../../store/types";
import { fetcher } from "../../shared/fetcher";
import { FilterList } from "./filterList";
import { Suspense } from "react";
import { ErrorBoundary } from 'react-error-boundary';

const API_ADDRESS_GAMES = "http://localhost:3000/games";

export default function CatalogPage() {
  // const store = useStore();
  // let games: IGame[] = [];
  const { data, error, isLoading } = useSWR(
    API_ADDRESS_GAMES,
    fetcher
  );

  //if (isLoading) {
  //  return <div>Loading...</div>;
  //}
  //if (error) {
  //  return <div>{error.message}</div>;
  //}
  // <Suspense fallback={<div>SUS loading......</div>}>
  return (
    <ErrorBoundary fallback={<h2>Error - could not fetch games data.</h2>}>
      <FilterList games={data} />
    </ErrorBoundary>
  );
}