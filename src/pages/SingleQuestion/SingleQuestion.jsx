import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getQuestion } from '../../redux/features/singleQuestionSlice';
import Question from '../../components/Question/Question';
import Answer from '../../components/Answer/Answer';

export default function SingleQuestion() {
  const dispatch = useDispatch();
  const { questionID } = useParams();
  const status = useSelector((state) => state.singleQuestionReducer.status);
  const question = useSelector((state) => state.singleQuestionReducer.question);
  const comments = useSelector((state) => state.singleQuestionReducer.comments);

  useEffect(() => {
    dispatch(getQuestion(questionID));
  }, [dispatch, questionID]);

  return (
    <div className="container sm:mx-auto w-10/12 mt-8 pr-2">
      <div className="flex content-center">
        <div className="w-full mx-auto w-12/12 sm:w-10/12  xl:w-7/12">
          {status.question === 'loading' ? (
            <p>loading....</p>
          ) : (
            <div>
              <Question question={question} status={status.question} />
              {question?.comments?.map((comment) => (
                <div className="flex">
                  <h2 className="mr-2">{comment.creator}</h2>
                  <p>{comment.content}</p>
                </div>
              ))}
            </div>
          )}
          {status.comments === 'loading' ? (
            <p>Comments loading</p>
          ) : (
            <div>
              {comments.map((comment) => {
                return (
                  <div>
                    <Answer comment={comment} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
