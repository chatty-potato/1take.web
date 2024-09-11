import { useLoaderData } from "react-router-dom";

const Session = () => {
  // TODO useLoaderData에 대한 typeSafe한 사용 방법을 찾아야합니다.
  const data = useLoaderData() as { sessionId: string };

  return <h1>session: {data.sessionId}</h1>;
};

export default Session;
