import fetcher from "./fetcher";

type ProfileResponseData = {
  content: string;
};

type InterviewListResponseData = {
  content: string;
};

const profileApis = {
  getProfile: () => {
    return fetcher.get<ProfileResponseData>("/profile");
  },
  patchProfile: (data : any) => {
    return fetcher.patch<ProfileResponseData>("/profile", data);
  },
  getInterviewList: () => {
    return fetcher.get<InterviewListResponseData>("/profile/interviews");
  },
}

export default profileApis;
