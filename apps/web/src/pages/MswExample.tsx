import { useLoaderData } from 'react-router-dom';
import { Interview } from '@1take/apis';
import { InterviewQuestionResponse } from '@1take/apis/src/types/interview.types';

const MswExample = () => {
  // TODO useLoaderData에 대한 typeSafe한 사용 방법을 찾아야합니다.
  const { questions } = useLoaderData() as InterviewQuestionResponse;
  console.log('inner Session data: ', questions);
  // console.log(res);
  return (
    <>
      {questions.map((question, index) => (
        <div key={index}>
          <h1>{question.question}</h1>
          <h2>{question.questionIndex}</h2>
        </div>
      ))}
      <button
        onClick={() =>
          Interview.getInterviewCategory().then((res) => console.log(res))
        }
      >
        get category
      </button>
      <button
        onClick={() =>
          Interview.postInterview({
            title: 'hello',
            categories: ['hello'],
          }).then((res) => console.log(res.data))
        }
      >
        post Interview
      </button>
    </>
  );
};

export default MswExample;
