import { RouteObject } from "react-router-dom";
import * as Pages from "../pages";

const InterviewRoutes: RouteObject = {
  path: "interview",
  Component: Pages.Interview.Layout,
  children: [
    {
      index: true,
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
        return new Response(JSON.stringify({ sessionId }), {
          status: 200,
          headers: {
            "Content-Type": "application/json; utf-8",
          },
        });
      },
    },
  ],
};

export default InterviewRoutes;
