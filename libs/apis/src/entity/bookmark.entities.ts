import { InterviewQNA, InterviewSession } from './interview.entities';

export type BookMark = {
  bookmarkID: number,
  createdAt: string,
  sessionID: Pick<InterviewSession, 'sessionID'>,
  interviewQNA: InterviewQNA,
};
