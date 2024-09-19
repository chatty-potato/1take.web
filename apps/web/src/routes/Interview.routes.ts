import { RouteObject } from "react-router-dom";
import * as Pages from "../pages";

const InterviewRoutes: RouteObject = {
  path: "interview",
  Component: Pages.Interview.Layout,
  children: [
    {
      path: "",
      Component: Pages.Interview.Home,
    },
    {
      path: "result",
      Component: Pages.Interview.Result,
    },
    {
      path: ":sessionId",
      Component: Pages.Interview.Session,
      loader: async ({ params: { sessionId } }) => {
        // TODO: WILL BE DELTE IT just show how to use loader
        return new Response(JSON.stringify({ sessionId }), {
          status: 200,
          headers: {
            "Content-Type": "application/json; utf-8",
          },
        });
      },
    },
    {
      path: "*",
      Component: Pages.Notfound,
    },
  ],
};

export default InterviewRoutes;
