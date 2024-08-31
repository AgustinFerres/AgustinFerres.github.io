import { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";
import Home from "../routes/Home.tsx";
import EnumMap from "./EnumMap.ts";

export interface Route {
  path: string;
  element: ReactNode;
  children?: Route[];
}

export enum Routes {
  HOME = "/",
  ABOUT = "/about",
  CONTACT = "/contact",
  F_INTERVIEW = "/facundo-interview",
}

export const routes = new EnumMap<Routes, Route>({
  [Routes.HOME]: {
    path: Routes.HOME,
    element: <Home />,

  },
  [Routes.F_INTERVIEW]: {
    path: Routes.F_INTERVIEW,
    element: undefined,
  },
});


export function navigateTo(route: Routes, navigate: NavigateFunction) {
  navigate(route ?? Routes.HOME);
}
