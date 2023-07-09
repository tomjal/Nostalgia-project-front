import type { RouteObject } from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from "../components/Layout";

const HomePage = lazy(() => import("../pages/home/home.page"));
const CatalogPage = lazy(() => import("../pages/catalog/catalog.page"));
const AddgamePage = lazy(() => import("../pages/addgame/addgame.page"));
const NewsPage = lazy(() => import("../pages/news/news.page"));

const normalRoutes: RouteObject = {
  path: "*",
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Suspense fallback={<>...</>}><HomePage /></Suspense>,
    },
    {
      path: "catalog",
      element: <Suspense fallback={<>...</>}><CatalogPage /></Suspense>,
    },
    {
      path: "addgame",
      element: <Suspense fallback={<>...</>}><AddgamePage /></Suspense>,
    },
    {
      path: "news",
      element: <Suspense fallback={<>...</>}><NewsPage /></Suspense>,
    },
  ],
};

const routes: RouteObject[] = [normalRoutes];

export default routes;
