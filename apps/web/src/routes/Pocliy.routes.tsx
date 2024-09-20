import { RouteObject } from "react-router-dom";
import { Policy } from "../pages";
import NotFound from "../pages/NotFound";

export const policyRoutes: RouteObject = {
  path: "term-and-services",
  Component: Policy.Layout,
  children: [
    {
      path: "term",
      Component: Policy.Term,
    },
    {
      path: "service",
      Component: Policy.Service,
    },
    {
      path: "*",
      Component: NotFound,
    },
  ],
};
