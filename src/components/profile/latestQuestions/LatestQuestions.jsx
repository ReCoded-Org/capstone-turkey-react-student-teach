/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Question from '../../Question/Question';
import { fetchQuestions } from '../../../redux/features/questionsSlice';
import userProfilePlaceholder from '../../../assets/images/profilePlaceholer.png';
import CheckContent from '../../checkContent/CheckContent';

function LatestQuestions() {
  const dispatch = useDispatch();
  const allQuestions = useSelector((state) => state.questions);
  const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : {};
  const userInfoFromSignUp = localStorage.getItem('signedUser')
    ? JSON.parse(localStorage.getItem('signedUser'))
    : {};
  const firstNameSignUp = useSelector(
    (state) => state.signIn.signUp.isSignedUp.firstName,
  );
  const lastNameSignUp = useSelector(
    (state) => state.signIn.signUp.isSignedUp.lastName,
  );
  const { firstName } = useSelector((state) => state.signIn.user.userInfo);
  const { lastName } = useSelector((state) => state.signIn.user.userInfo);
  const formattedFirstName =
    firstName && firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const formattedLastName =
    lastName && lastName.charAt(0).toUpperCase() + lastName.slice(1);
  const formattedFirstNameSignUp =
    firstNameSignUp &&
    firstNameSignUp.charAt(0).toUpperCase() + firstNameSignUp.slice(1);
  const formattedLastSignUp =
    lastNameSignUp &&
    lastNameSignUp.charAt(0).toUpperCase() + lastNameSignUp.slice(1);
  const avatar = useSelector(
    (state) => state.fetchAllTutorReducer.user?.avatar,
  );
  const userNameSignIn = `${formattedFirstName}  ${formattedLastName}`;
  const userNameSignUp = `${formattedFirstNameSignUp} ${formattedLastSignUp}`;

  const isThereQuestion = allQuestions.questions.some(
    (q) =>
      q.student === userInfoFromStorage.id ||
      q.student === userInfoFromSignUp.id,
  );

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  // eslint-disable-next-line consistent-return
  return (
    <div>
      {allQuestions.questions
        ?.slice(
          allQuestions.questions.length - 21,
          allQuestions.questions.length,
        )
        .reverse()
        .map((q) => {
          if (
            q.student === userInfoFromStorage.id ||
            q.student === userInfoFromSignUp.id
          ) {
            return (
              <Question
                key={uuidv4()}
                avatar={avatar || userProfilePlaceholder}
                userName={formattedFirstName ? userNameSignIn : userNameSignUp}
                questionTitle={q.title}
                questionText={q.content}
              />
            );
          }

          return null;
        })}
      {isThereQuestion ? null : <CheckContent label="No question added yet." />}
    </div>
  );
}

export default LatestQuestions;
