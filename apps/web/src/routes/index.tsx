import { createBrowserRouter } from "react-router-dom";
import * as Pages from "../pages";
import InterviewRoutes from "./Interview.routes";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Pages.Layout,
    children: [
      // TODO: Split to pages pages folder will be nesteds Architecture.
      {
        index: true,
        Component: Pages.Home,
      },
      {
        path: "login",
        Component: Pages.Login,
      },
      {
        path: "tips-for-interview",
        Component: Pages.TipForInterview,
      },
      InterviewRoutes,
      {
        path: "term-and-services",
        Component: Pages.Policy.Layout,
        children: [
          {
            path: "term",
            Component: Pages.Policy.Term,
          },
          {
            path: "service",
            Component: Pages.Policy.Service,
          },
          {
            
          }
        ],
      },
    ],
  },
]);

export default router;
