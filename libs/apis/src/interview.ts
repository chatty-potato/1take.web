import fetcher from "./fetcher";

type InterviewResponseData = {
  content: string;
};

const InterviewApis = {
	createComment: (data : any) => {
  	return fetcher.post<InterviewResponseData>("/interview", data);
	},
  patchInterview: (data : any) => {
    return fetcher.patch<InterviewResponseData>("/interview", data);
  },
  getInterviewCategory: () => {
    return fetcher.get<InterviewResponseData>("/interview/category");
  },
  beginInterview: (data : any) => {
    return fetcher.post<InterviewResponseData>("/interview/begin", data);
  },
  getInterviewQuestion: () => {
    return fetcher.get<InterviewResponseData>("/interview/questions");
  },
  postInterviewAnswer: (data : any) => {
    return fetcher.post<InterviewResponseData>("/interview/answer", data);
  },
  postInterviewreport: (data : any) => { 
    return fetcher.post<InterviewResponseData>("/interview/report", data);
  }
};

export default InterviewApis;
