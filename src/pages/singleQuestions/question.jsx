/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Question from '../../components/Question/Question';
import { fetchQuestions } from '../../redux/features/questionsSlice';
import { fetchAllUsers } from '../../redux/features/fetchAllUsersSlice';
// eslint-disable-next-line no-unused-vars
import userProfilePlaceholder from '../../assets/images/profilePlaceholer.png';

const question = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.questions);
  // eslint-disable-next-line no-underscore-dangle
  const ques = data.questions?.filter((q) => q?._id === id);
  const dispatch = useDispatch();

  const users = useSelector((state) => state.fetchAllUsers);
  const user = users.users?.filter((u) =>
    u.id === ques[0]?.student ? u : false,
  );
  const userFullName = `${user[0]?.firstName}  ${user[0]?.lastName}`;

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);
  if (users.status !== 'success' || data.status !== 'success')
    return <div>looding</div>;
  return (
    <Question
      avatar={
        user[0]?.avatar === undefined ? userProfilePlaceholder : user[0].avatar
      }
      userName={userFullName}
      questionTitle={ques[0]?.title}
      questionText={ques[0]?.content}
      studentId={user[0].id}
      createdAt={ques[0]?.createdAt}
    />
  );
};

export default question;
