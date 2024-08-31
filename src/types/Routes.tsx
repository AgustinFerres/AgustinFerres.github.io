import { ReactNode } from "react";
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
    path: "/",
    element: <Home />,
  },
});
