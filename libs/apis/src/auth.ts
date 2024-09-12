import fetcher from "./utils/fetcher";
import { 
  TokenAuthenticateResponse,
  AccountCreateRequest,
  AccountCreateResponse,
  AccountDeleteResponse,
  LogoutResponse
} from "./types/auth.type";

const authApis = {
  authenticateToken: () => {
    return fetcher.get<TokenAuthenticateResponse>("/auth");
  },
  createAccount: (data: AccountCreateRequest) => {
    return fetcher.post<AccountCreateResponse>("/auth", data);
  },
  deleteAccount: () => {
    return fetcher.patch<AccountDeleteResponse>("/auth");
  },
  logout: () => {
    return fetcher.post<LogoutResponse>("/auth/logout");
  },
}

export default authApis;
