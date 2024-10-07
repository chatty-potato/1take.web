import { handler } from './mock/handlers';
import { setupWorker } from 'msw/browser';

export const mswSetup = (env: 'server' | 'browser') => {
  if (env === 'browser') {
    const worker = setupWorker(...handler);
    return worker.start();
  }
  /*   if (env === 'server') {
    const { setupServer } = (await import('msw/node')) as {
      setupServer: SetupServer;
    };
    const server = setupServer(...handler);
    return () => server.listen();
  }
 */
};

export { default as AuthApis } from './auth';
export { default as BookmarkApis } from './bookmark';
export { default as Interview } from './interview';
export { default as ProfileApis } from './profile';
export { default as Qna } from './qna';
