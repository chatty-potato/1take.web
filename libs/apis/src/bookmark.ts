import fetcher from "./fetcher";

type bookmarkResponseData = {
  content: string;
};

const bookmarkApis = {
  getBookmarkList: () => {
    return fetcher.get<bookmarkResponseData>("/interview/question/bookmarks");
  },
  createBookmark: (data : any) => {
    return fetcher.post<bookmarkResponseData>("/interview/question/bookmark", data);
  },
  deleteBookmark: (data : any) => {
    return fetcher.delete<bookmarkResponseData>("/interview/question/bookmark", data);
  }
}

export default bookmarkApis;
