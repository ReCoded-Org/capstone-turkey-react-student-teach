import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchQuestions } from '../../redux/features/questionsSlice';
import { fetchAllUsers } from '../../redux/features/fetchAllUsersSlice';
import Question from '../../components/Question/Question';
// import Answer from '../../components/Answer/Answer';
import userProfilePlaceholder from '../../assets/images/profilePlaceholer.png';

export default function SingleQuestion() {
  const dispatch = useDispatch();
  const { questionID } = useParams();
  const data = useSelector((state) => state.questions);
  // eslint-disable-next-line no-underscore-dangle
  const ques = data.questions?.filter((q) => q?._id === questionID);
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  const status = useSelector((state) => state.singleQuestionReducer.status);
  //   const question = useSelector((state) => state.singleQuestionReducer.question);
  //   const comments = useSelector((state) => state.singleQuestionReducer.comments);
  const users = useSelector((state) => state.fetchAllUsers);
  const user = users.users?.filter((u) =>
    u.id === ques[0]?.student ? u : false,
  );

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  console.log(user);

  return (
    <div>
      <div className={`${darkMode ? 'bg-primaryDark' : 'bg-white'} py-10`}>
        <Question
          avatar={
            user[0]?.avatar === undefined
              ? userProfilePlaceholder
              : user[0].avatar
          }
          userName={`${user[0]?.firstName}  ${user[0]?.lastName}`}
          questionTitle={ques[0]?.title}
          questionText={ques[0]?.content}
          studentId={user[0].id}
          createdAt={ques[0]?.createdAt}
          status={status.question}
        />
      </div>
    </div>
  );
}
