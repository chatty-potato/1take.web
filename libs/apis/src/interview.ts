import fetcher from './utils/fetcher';
import { API_RESOURCE } from './utils/config';
import { InterviewSession } from './entity/interview.entities';
import {
  InterviewListGetResponse,
  InterviewCategoryGetResponse,
  InterviewPostRequest,
  InterviewPostResponse,
  InterviewQuestionResponse,
  InterviewAnswerPostRequest,
  InterviewAnswerPostResponse,
  InterviewReportPostRequest,
  InterviewReportPostResponse,
  InterviewReportGetResponse,
} from './types/interview.types';

const { INTERVIEWS } = API_RESOURCE;
const { CATEGORY } = API_RESOURCE;
const { REPORTS } = API_RESOURCE;
const { QUESTIONS } = API_RESOURCE;

const InterviewApis = {
  getInterviewList: () => {
    return fetcher.get<InterviewListGetResponse>(INTERVIEWS);
  },
  getInterviewCategory: async () => {
    const { data } = await fetcher.get<InterviewCategoryGetResponse>(CATEGORY);
    const { categories } = data;
    if (!categories) throw new Error('No categories');
    return categories;
  },
  postInterview: (data: InterviewPostRequest) => {
    return fetcher.post<InterviewPostResponse>(INTERVIEWS, data);
  },
  getInterviewQuestion: async (sessionID: InterviewSession['sessionID']) => {
    const { data } = await fetcher.get<InterviewQuestionResponse>(
      `${INTERVIEWS}/${sessionID}${QUESTIONS}`,
    );
    return data;
  },
  postInterviewAnswer: (
    data: InterviewAnswerPostRequest,
    sessionID: Pick<InterviewSession, 'sessionID'>,
  ) => {
    return fetcher.post<InterviewAnswerPostResponse>(
      `${INTERVIEWS}/${sessionID}/answer`,
      data,
    );
  },
  postInterviewreport: (
    data: InterviewReportPostRequest,
    sessionID: Pick<InterviewSession, 'sessionID'>,
  ) => {
    return fetcher.post<InterviewReportPostResponse>(
      `${INTERVIEWS}${REPORTS}/${sessionID}`,
      data,
    );
  },
  getInterviewreport: (sessionID: Pick<InterviewSession, 'sessionID'>) => {
    return fetcher.get<InterviewReportGetResponse>(
      `${INTERVIEWS}${REPORTS}/${sessionID}`,
    );
  },
};

export default InterviewApis;
