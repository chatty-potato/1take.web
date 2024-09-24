import fetcher from './utils/fetcher';
import { API_RESOURCE } from './utils/config';
import {
  TokenAuthenticateResponse,
  AccountCreateRequest,
  AccountCreateResponse,
  AccountDeleteResponse,
  LogoutResponse,
} from './types/auth.type';

const { AUTH } = API_RESOURCE;

const authApis = {
  authenticateToken: () => {
    return fetcher.get<TokenAuthenticateResponse>(AUTH);
  },
  createAccount: (data: AccountCreateRequest) => {
    return fetcher.post<AccountCreateResponse>(AUTH, data);
  },
  deleteAccount: () => {
    return fetcher.patch<AccountDeleteResponse>(AUTH);
  },
  logout: () => {
    return fetcher.post<LogoutResponse>(`${AUTH}/logout`);
  },
};

export default authApis;
