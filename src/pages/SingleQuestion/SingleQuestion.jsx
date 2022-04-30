import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getQuestion } from '../../redux/features/singleQuestionSlice';
import Question from '../../components/Question/Question';

export default function SingleQuestion() {
  const dispatch = useDispatch();
  const { questionID } = useParams();
  const status = useSelector((state) => state.singleQuestionReducer.status);
  const question = useSelector(
    (state) => state.singleQuestionReducer.question.getQuestionById,
  );
  const studentInfo = useSelector(
    (state) => state.singleQuestionReducer.question.getStudentById,
  );

  useEffect(() => {
    dispatch(getQuestion(questionID));
  }, [dispatch, questionID]);

  return (
    <div className="container sm:mx-auto w-10/12 mt-8 pr-2">
      <div className="flex content-center">
        <div className="w-full mx-auto w-12/12 sm:w-10/12  xl:w-7/12">
          {status === 'loading' ? (
            <p>loading....</p>
          ) : (
            <div>
              <Question question={question} studentInfo={studentInfo} />
              {question?.comments?.map((comment) => (
                <div className="flex">
                  <h2 className="mr-2">{comment.creator}</h2>
                  <p>{comment.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
