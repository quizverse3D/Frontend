import { lazy } from "react";

export const HomePageAsync = lazy(() =>
  import("./HomePage").then((module) => ({ default: module.HomePage }))
);
