import { BookMark } from '../entity/bookmark.entities';
import {
  InterviewSession,
  InterviewQNA,
  Categories,
} from '../entity/interview.entities';

/**
  * @METHOD GET
  * @AUTH NEED
  * @URI /interview/interviews
  */
export type InterviewListGetResponse = {
  sessions: InterviewSession[],
};

/**
  * @METHOD GET
  * @AUTH NEED
  * @URI /interview/category
  */
export type InterviewCategoryGetResponse = Categories;

/**
  * @METHOD POST
  * @AUTH NEED
  * @URI /interview
  */
export type InterviewBeginPostRequest = Pick<InterviewSession, 'title'> & Categories;
export type InterviewBeginPostResponse = Pick<InterviewSession, 'sessionID'>;

/**
  * @METHOD GET
  * @AUTH NEED
  * @URI /interview/question/{session_id}
  */
export type InterviewQuestionResponse = {
  currentQuestionIndex: Pick<InterviewQNA, 'questionIndex'>,
  questions: Pick<InterviewQNA, 'question' | 'questionIndex'>[],
};

/**
  * @METHOD POST
  * @AUTH NEED
  * @URI //api/interview/answer/{session_id}
  */
export type InterviewAnswerPostRequest = Pick<InterviewQNA, 'questionIndex' | 'answer'> 
export type InterviewAnswerPostResponse = Pick<InterviewSession, 'done'>; // 다시 request 보내서 레포트 가져오기


/**
  * @METHOD POST
  * @AUTH NEED
  * @URI /interview/repport/{session_id}
  */
export type InterviewReportPostRequest = Pick<InterviewSession, 'sessionID'>;
export type InterviewReportPostResponse = InterviewSession & {
  InterviewQNAs: InterviewQNA[],
};

/**
  * @METHOD GET
  * @AUTH NEED
  * @URI /interview/report/{session_id}
  */
export type InterviewReportGetResponse = InterviewSession & {
  InterviewQNAs: InterviewQNA[],
  bookmarks: Array<
    Pick<BookMark, 'bookmarkID'> & Pick<BookMark['interviewQNA'], 'questionIndex'>
  >,
};
