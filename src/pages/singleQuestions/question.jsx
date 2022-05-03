/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Question from '../../components/home/Question';
import { fetchQuestions } from '../../redux/features/questionsSlice';
// eslint-disable-next-line no-unused-vars
import Avatar from '../../assets/images/avatar.jpg';

const question = () => {
  const [user, setUser] = useState();
  const { id } = useParams();
  const data = useSelector((state) => state.questions.questions);
  // eslint-disable-next-line no-underscore-dangle
  const ques = data.filter((q) => q._id === id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://studentsteach.re-coded.com/api/tutors/${ques[0].student}`,
        );
        const json = await response.json();
        setUser(json);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, [dispatch]);
  console.log(user);
  console.log(1);
  console.log(ques[0]);
  return (
    <Question
      avatar={user?.avatar === undefined ? Avatar : user.avatar}
      userName={user?.username}
      questionTitle={ques[0]?.title}
      questionText={ques[0]?.content}
    />
  );
};

export default question;
