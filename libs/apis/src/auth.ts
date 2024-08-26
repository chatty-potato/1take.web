import fetcher from "./fetcher";

type authResponseData = {
  content: string;
};

const authApis = {
  getUser: () => {
    return fetcher.get<authResponseData>("/auth/info");
  },
}

export default authApis;
