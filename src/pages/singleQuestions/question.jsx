/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Question from '../../components/Question/Question';
import { fetchQuestions } from '../../redux/features/questionsSlice';
import { fetchAllUsers } from '../../redux/features/fetchAllUsersSlice';
// eslint-disable-next-line no-unused-vars
import Avatar from '../../assets/images/avatar.jpg';

const question = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.questions.questions);
  // eslint-disable-next-line no-underscore-dangle
  const ques = data?.filter((q) => q?._id === id);

  const users = useSelector((state) => state.fetchAllUsers.users);
  const user = users?.filter((u) => (u.id === ques[0]?.student ? u : false));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);
  console.log(user[0]);
  console.log(1);
  console.log(ques[0]);
  return (
    <Question
      avatar={user[0]?.avatar === undefined ? Avatar : user[0].avatar}
      userName={user[0]?.username}
      questionTitle={ques[0]?.title}
      questionText={ques[0]?.content}
    />
  );
};

export default question;
