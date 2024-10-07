import Axios from 'axios';
import {
  DEFAULT_TIME_OUT,
  API_URL,
  AUTH_UN_NEED_URL,
  AUTH_TOKEN_TYPE,
  LOGIN_VALIDATION_FEATURE,
} from './config';

/**
 * @name fetcher
 * @description
 * Axios 인스턴스를 생성합니다.
 * @returns AxiosInstance
 * @see
 * - [Axios](https://axios-http.com/docs/intro)
 * - [AxiosInstance](https://axios-http.com/docs/instance)
 * - [AxiosRequestConfig](https://axios-http.com/docs/req_config)
 *
 */
const fetcher = Axios.create({
  baseURL: API_URL,
  timeout: DEFAULT_TIME_OUT,
});

// API 요청시 토큰이 필요한 경우에 토큰을 추가하거나, 토큰이 없는 경우 에러를 발생시킵니다.
fetcher.interceptors.request.use((config) => {
  const authNeeds = !AUTH_UN_NEED_URL.some((uri) => config.url?.match(uri));
  const token = localStorage.getItem('token'); //TODO: 토큰을 어디에 저장할지 정해야합니다

  if (authNeeds && LOGIN_VALIDATION_FEATURE) {
    if (!token) throw new Error('토큰이 없습니다.');
    config.headers.Authorization = `${AUTH_TOKEN_TYPE} ${token}`;
  }
  return config;
});

export default fetcher;
