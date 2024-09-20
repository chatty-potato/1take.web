import fetcher from "./utils/fetcher";
import { InterviewSession } from "./entity/interview.entities";
import { 
  InterviewListGetResponse,
  InterviewCategoryGetResponse,
  InterviewBeginPostRequest,
  InterviewBeginPostResponse,
  InterviewQuestionResponse,
  InterviewAnswerPostRequest,
  InterviewAnswerPostResponse,
  InterviewReportPostRequest,
  InterviewReportPostResponse,
  InterviewReportGetResponse,
 } from "./types/interview.types";

const InterviewApis = {
  getInterviewList: () => {
    return fetcher.get<InterviewListGetResponse>("/interview/interviews");
  },
  getInterviewCategory: () => {
    return fetcher.get<InterviewCategoryGetResponse>("/category");
  },
  beginInterview: (data : InterviewBeginPostRequest) => {
    return fetcher.post<InterviewBeginPostResponse>("/interview", data);
  },
  getInterviewQuestion: (sessionID: Pick<InterviewSession, 'sessionID'>) => {
    return fetcher.get<InterviewQuestionResponse>(`/interview/questions/${sessionID}`);
  },
  postInterviewAnswer: (
    data : InterviewAnswerPostRequest, 
    sessionID: Pick<InterviewSession, 'sessionID'>) => {
    return fetcher.post<InterviewAnswerPostResponse>(`/interview/answer/${sessionID}`, data);
  },
  postInterviewreport: (data : InterviewReportPostRequest) => { 
    return fetcher.post<InterviewReportPostResponse>("/interview/report", data);
  },
  getInterviewreport: (sessionID: Pick<InterviewSession, 'sessionID'>) => {
    return fetcher.get<InterviewReportGetResponse>(`/interview/report/${sessionID}`);
  }
};

export default InterviewApis;
