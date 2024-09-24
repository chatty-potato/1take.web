import fetcher from './utils/fetcher';
import { API_RESOURCE } from './utils/config';
import {
  BookmarkListGetResponse,
  BookmarkCreateRequest,
  BookmarkCreateResponse,
  BookmarkDeleteResponse,
  BookmarkDeleteRequest,
} from './types/bookmark.types';

const { INTERVIEWS } = API_RESOURCE;
const { QUESTIONS } = API_RESOURCE;
const { BOOOKMARKS } = API_RESOURCE;

const bookmarkApis = {
  getBookmarkList: () => {
    return fetcher.get<BookmarkListGetResponse>(
      `${INTERVIEWS}${QUESTIONS}${BOOOKMARKS}`,
    );
  },
  createBookmark: (data: BookmarkCreateRequest) => {
    return fetcher.post<BookmarkCreateResponse>(
      `${INTERVIEWS}${QUESTIONS}${BOOOKMARKS}`,
      data,
    );
  },
  deleteBookmark: (data: BookmarkDeleteRequest) => {
    return fetcher.patch<BookmarkDeleteResponse>(
      `${INTERVIEWS}${QUESTIONS}${BOOOKMARKS}`,
      data,
    );
  },
};

export default bookmarkApis;
