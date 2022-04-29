import { useParams } from 'react-router-dom';

function SingleQuestion() {
  const { questionID } = useParams();
  console.log(questionID);
  return <div />;
}

export default SingleQuestion;
