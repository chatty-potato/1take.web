import { BookMark } from '../entity/bookmark.entities';
import {
  InterviewSession,
  InterviewQNA,
  Categories,
} from '../entity/interview.entities';

/**
 * @METHOD GET
 * @AUTH NEED
 * @URI /interviews
 */
export type InterviewListGetResponse = {
  sessions: InterviewSession[];
};

/**
 * @METHOD GET
 * @AUTH NEED
 * @URI /category
 */
export type InterviewCategoryGetResponse = Categories;

/**
 * @METHOD POST
 * @AUTH NEED
 * @URI /interviews
 */
export type InterviewPostRequest = Pick<InterviewSession, 'title'> & Categories;
export type InterviewPostResponse = Pick<InterviewSession, 'sessionID'>;

/**
 * @METHOD GET
 * @AUTH NEED
 * @URI /interviews/{session_id}/questions
 */
export type InterviewQuestionResponse = {
  currentQuestionIndex: Pick<InterviewQNA, 'questionIndex'>;
  questions: Pick<InterviewQNA, 'question' | 'questionIndex' | 'answer'>[];
};

/**
 * @METHOD POST
 * @AUTH NEED
 * @URI /interviews/{session_id}/answer
 */
export type InterviewAnswerPostRequest = Pick<
  InterviewQNA,
  'questionIndex' | 'answer'
>;
export type InterviewAnswerPostResponse = Pick<InterviewSession, 'done'>; // 다시 request 보내서 레포트 가져오기

/**
 * @METHOD POST
 * @AUTH NEED
 * @URI /interviews/repports/{session_id}
 */
export type InterviewReportPostRequest = undefined | null;
export type InterviewReportPostResponse = InterviewSession & {
  InterviewQNAs: InterviewQNA[];
};

/**
 * @METHOD GET
 * @AUTH NEED
 * @URI /interviews/reports/{session_id}
 */
export type InterviewReportGetResponse = InterviewSession & {
  InterviewQNAs: InterviewQNA[];
  bookmarks: Array<
    Pick<BookMark, 'bookmarkID'> &
      Pick<BookMark['interviewQNA'], 'questionIndex'>
  >;
};
