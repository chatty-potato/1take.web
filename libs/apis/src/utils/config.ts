import { Q } from 'vitest/dist/reporters-B7ebVMkT';

const API_URL = 'http://localhost:4000/api/v1';
// || (import.meta.env.VITE_API_URL as string) ; // VITE 패키지의 위치에 대한 고려 필요
const DEFAULT_TIME_OUT = 1000 * 10; // 10초
const AUTH_UN_NEED_URL: RegExp[] = [/\/auth\/login/];
const AUTH_TOKEN_TYPE = 'Bearer';

const API_RESOURCE = {
  AUTH: '/auth',
  PROFILE: '/profile',
  CATEGORY: '/category',
  INTERVIEWS: '/interviews',
  QUESTIONS: '/questions',
  REPORTS: '/reports',
  BOOOKMARKS: '/bookmarks',
  QNA: '/qna',
};

export {
  API_URL,
  DEFAULT_TIME_OUT,
  AUTH_UN_NEED_URL,
  AUTH_TOKEN_TYPE,
  API_RESOURCE,
};
