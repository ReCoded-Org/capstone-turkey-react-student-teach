import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchQuestions } from '../../redux/features/questionsSlice';
import { fetchAllUsers } from '../../redux/features/fetchAllUsersSlice';
import Question from '../../components/Question/Question';
import userProfilePlaceholder from '../../assets/images/profilePlaceholer.png';
import Answer from '../../components/Answer/Answer';

export default function SingleQuestion() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  const { id } = useParams();
  console.log('questionid', id);
  const data = useSelector((state) => state.questions);
  // eslint-disable-next-line no-underscore-dangle
  const ques = data.questions?.filter((q) => q?._id === id);
  const comments = useSelector((state) => state.commentsReducer.comments);
  const users = useSelector((state) => state.fetchAllUsers);
  const user = users.users?.filter((u) =>
    u.id === ques[0]?.student ? u : false,
  );
  const userFullName = `${user[0]?.firstName}  ${user[0]?.lastName}`;

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  useEffect(() => {
    console.log('comments', comments);
  }, []);

  if (users.status !== 'success' || data.status !== 'success')
    return <div>looding</div>;
  return (
    <div className={`${darkMode ? 'bg-primaryDark' : 'bg-white'} py-10`}>
      <Question
        avatar={
          user[0]?.avatar === undefined
            ? userProfilePlaceholder
            : user[0].avatar
        }
        userName={userFullName}
        questionTitle={ques[0]?.title}
        questionText={ques[0]?.content}
        questionId={id}
        studentId={user[0].id}
        createdAt={ques[0]?.createdAt}
      />
      <div className="flex justify-center">
        <div className="flex-col">
          {comments
            .filter((comment) => comment.questionID === id)
            .map((comment) => {
              return (
                <Answer
                  image={
                    users.users?.filter(
                      (creator) => creator.id === comment.creatorID,
                    )[0]?.avatar === undefined
                      ? userProfilePlaceholder
                      : users.users?.filter(
                          (creator) => creator.id === comment.creatorID,
                        )[0].avatar
                  }
                  username={`${
                    users.users?.filter(
                      (creator) => creator.id === comment.creatorID,
                    )[0]?.firstName
                  } ${
                    users.users?.filter(
                      (creator) => creator.id === comment.creatorID,
                    )[0]?.lastName
                  }`}
                >
                  {comment.content}
                </Answer>
              );
            })}
        </div>
      </div>
    </div>
  );
}
