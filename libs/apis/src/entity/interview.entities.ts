export type InterviewSession = {
  sessionID:  number,
  title: string,
  date: string,
  score: number,
  done: boolean,
};

export type Evaluation = {
  aiEvaluation: string,
  rating : {
    accuracy : number,
    logicalConsistency: number,
    technicalDepth: number,
  },
};

export type InterviewQNA = {
  question: string,
  questionIndex: number,
  answer: string | null,
  evaluation: Evaluation,
};

export type Categories = {
  categories: string[];
};
