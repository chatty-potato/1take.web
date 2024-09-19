import { createBrowserRouter } from "react-router-dom";
import * as Pages from "../pages";
import InterviewRoutes from "./Interview.routes";
import { policyRoutes } from "./Pocliy.routes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Pages.Layout,
    children: [
      // TODO: Split to pages pages folder will be nesteds Architecture.
      {
        path: "",
        Component: Pages.Home,
      },
      {
        path: "login",
        Component: Pages.Login,
      },
      {
        path: "tips-for-interview",
        Component: Pages.TipsForInterview,
      },
      InterviewRoutes,
      policyRoutes,
    ],
  },
  {
    path: "*",
    Component: Pages.Notfound,
  },
]);

export default router;
