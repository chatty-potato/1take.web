import fetcher from "./utils/fetcher";
import {
  BookmarkListGetResponse,
  BookmarkCreateRequest,
  BookmarkCreateResponse,
  BookmarkDeleteResponse,
  BookmarkDeleteRequest
} from "./types/bookmark.types";

const bookmarkApis = {
  getBookmarkList: () => {
    return fetcher.get<BookmarkListGetResponse>(
      "/interview/question/bookmarks"
    );
  },
  createBookmark: (data: BookmarkCreateRequest) => {
    return fetcher.post<BookmarkCreateResponse>(
      "/interview/question/bookmark",
      data
    );
  },
  deleteBookmark: (data: BookmarkDeleteRequest) => {
    return fetcher.patch<BookmarkDeleteResponse>("/interview/question/bookmark", data);
  },
};

export default bookmarkApis;
