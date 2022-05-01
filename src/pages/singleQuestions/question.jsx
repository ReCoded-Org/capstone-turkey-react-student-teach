import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Question from '../../components/Question/Question';
import { fetchQuestions } from '../../redux/features/questionsSlice';
// eslint-disable-next-line no-unused-vars
import Avatar from '../../assets/images/avatar.jpg';

const question = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useSelector(
    // eslint-disable-next-line no-underscore-dangle
    (state) => state.questions.questions,
  );
  // eslint-disable-next-line no-underscore-dangle
  const ques = data.filter((q) => q._id === id);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
