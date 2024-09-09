import { API_RESOURCE } from "./config";
import fetcher from "./fetcher";

type QnaResponseData = {
  content: string;
};

type QnaListResponseData = {
  content: string;
};

const qnaApis = {
  createQna: (data: any) => {
    return fetcher.post<QnaResponseData>(API_RESOURCE.QNA, data);
  },
  // temporary implementation
  getQnaList: () => {
    return fetcher.get<QnaListResponseData>(`${API_RESOURCE.QNA}/list`);
  },
}

export default qnaApis;