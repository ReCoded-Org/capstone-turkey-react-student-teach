import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getQuestion } from '../../redux/features/singleQuestionSlice';
import Question from '../../components/Question/Question';

export default function SingleQuestion() {
  const dispatch = useDispatch();
  const { questionID } = useParams();
  useEffect(() => {
    dispatch(getQuestion(questionID));
    console.log(questionID);
  }, [dispatch, questionID]);

  const status = useSelector((state) => state.singleQuestionReducer.status);
  const question = useSelector((state) => state.singleQuestionReducer.question);

  useEffect(() => {
    console.log('id', questionID);
    console.log('quesiton', question);
  }, [question, questionID]);

  return (
    <div className="container sm:mx-auto w-10/12 mt-8 pr-2">
      <div className="flex content-center">
        <div className="w-full mx-auto w-12/12 sm:w-10/12  xl:w-7/12">
          <Question status={status} question={question} />
        </div>
      </div>
    </div>
  );
}
