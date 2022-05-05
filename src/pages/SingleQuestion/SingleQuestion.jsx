import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchQuestions } from '../../redux/features/questionsSlice';
import { fetchAllUsers } from '../../redux/features/fetchAllUsersSlice';
import Question from '../../components/Question/Question';
import userProfilePlaceholder from '../../assets/images/profilePlaceholer.png';
import Answer from '../../components/Answer/Answer';

export default function SingleQuestion() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  const userSignedIn = useSelector((state) => state.signIn.user.userInfo.id);
  const userSignedUp = useSelector(
    (state) => state.signIn.signUp.isSignedUp.id,
  );
  const { id } = useParams();
  const data = useSelector((state) => state.questions);
  // eslint-disable-next-line no-underscore-dangle
  const ques = data.questions?.filter((q) => q?._id === id);
  const comments = useSelector((state) => state.commentsReducer.comments);
  const users = useSelector((state) => state.fetchAllUsers);
  const user = users.users?.filter((u) =>
    u.id === ques[0]?.student ? u : false,
  );
  const userFullName = `${user[0]?.firstName}  ${user[0]?.lastName}`;

  const usersComment = useSelector((state) => state.fetchAllUsers.users);
  const userComment = usersComment.filter((u) =>
    u.id === userSignedIn || userSignedUp ? u : false,
  );
  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

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
            ?.slice(comments.length - 221, comments?.length)
            .reverse()
            .filter((comment) => comment.questionID === id)
            .map((comment) => {
              return (
                <Answer
                  key={uuidv4()}
                  username={`${userComment[0]?.firstName} ${userComment[0]?.lastName}`}
                  // eslint-disable-next-line react/no-children-prop
                  children={comment?.content}
                  image={userComment[0]?.avatar}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
