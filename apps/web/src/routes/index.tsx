import { createBrowserRouter } from 'react-router-dom';
import * as Pages from '../pages';
import InterviewRoutes from './Interview.routes';
import { policyRoutes } from './Pocliy.routes';
import InterviewApis from '@1take/apis/src/interview';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Pages.Layout,
    children: [
      // TODO: Split to pages pages folder will be nesteds Architecture.
      {
        path: '',
        Component: Pages.Home,
      },
      {
        path: 'login',
        Component: Pages.Login,
      },
      {
        path: 'tips-for-interview',
        Component: Pages.TipsForInterview,
      },
      InterviewRoutes,
      policyRoutes,
      {
        path: 'example/:sessionId',
        Component: Pages.MswExample,
        loader: ({ params: { sessionId } }) => {
          return InterviewApis.getInterviewQuestion(parseInt(sessionId!));
          //loader: () => {
          //return fetch('https://localhost:4000/api/v1/test');
        },
      },
    ],
  },
  {
    path: '*',
    Component: Pages.Notfound,
  },
]);

export default router;
