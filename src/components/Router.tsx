import { ReactNode } from "react";
import { createBrowserRouter, createRoutesFromElements, Route as RouteElement, RouterProvider } from "react-router-dom";
import { routes, Route } from "../types/Routes.tsx";


export default function Router() {

  function getRoutes(routes: Route[]): ReactNode[] {
    return routes.map(r => (
      <RouteElement path={r.path} element={r.element}>
        {r.children && getRoutes(r.children)}
      </RouteElement>
    ));
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      getRoutes(routes.getValues()),
    ),
  );

  return <RouterProvider router={router}/>;
}
