import fetcher from "./utils/fetcher";
import { 
  ProfileGetResponse,
  PositionTypeGetResponse,
  ProfilePatchRequest,
  ProfilePatchResponse,
  ProfileImagePatchRequest, 
  ProfileImagePatchResponse,
} from "./types/profile.type";

const profileApis = {
  getProfile: () => {
    return fetcher.get<ProfileGetResponse>("/profile");
  },
  getPositionType: () => {
    return fetcher.get<PositionTypeGetResponse>("/category");
  },
  patchProfile: (data : ProfilePatchRequest) => {
    return fetcher.patch<ProfilePatchResponse>("/profile", data);
  },
  patchProfileImage: (data : ProfileImagePatchRequest) => {
    return fetcher.patch<ProfileImagePatchResponse>("/profile/image", data);
  },
}

export default profileApis;
