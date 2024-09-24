import fetcher from './utils/fetcher';
import { API_RESOURCE } from './utils/config';
import {
  ProfileGetResponse,
  PositionTypeGetResponse,
  ProfilePatchRequest,
  ProfilePatchResponse,
  ProfileImagePatchRequest,
  ProfileImagePatchResponse,
} from './types/profile.type';

const { PROFILE } = API_RESOURCE;
const { CATEGORY } = API_RESOURCE;

const profileApis = {
  getProfile: () => {
    return fetcher.get<ProfileGetResponse>(PROFILE);
  },
  getPositionType: () => {
    return fetcher.get<PositionTypeGetResponse>(CATEGORY);
  },
  patchProfile: (data: ProfilePatchRequest) => {
    return fetcher.patch<ProfilePatchResponse>(PROFILE, data);
  },
  patchProfileImage: (data: ProfileImagePatchRequest) => {
    return fetcher.patch<ProfileImagePatchResponse>(`${PROFILE}}/image`, data);
  },
};

export default profileApis;
