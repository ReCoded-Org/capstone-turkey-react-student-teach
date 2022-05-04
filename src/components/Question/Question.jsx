/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { FaEllipsisV, FaReply, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { addComment } from '../../redux/features/addCommentSlice';
import questionPhoto from '../../assets/images/questionImage.png';
import personPhoto from '../../assets/images/avatar.jpg';
import { deleteQuestionSlice } from '../../redux/features/deleteQuestionSlice';
import { fetchQuestions } from '../../redux/features/questionsSlice';

const ReplySchema = Yup.object().shape({
  content: Yup.string().min(3).required(),
});

function Question({
  avatar,
  userName,
  questionTitle,
  questionText,
  isLink,
  status,
  question,
  questionId,
  studentId,
  createdAt,
}) {
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  const [open, setOpen] = useState(false);
  const sideMenuRef = useRef();
  const ellipsisIconRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    const checkIfClickedOutsideOfSideMenu = (e) => {
      if (
        open &&
        !sideMenuRef.current.contains(e.target) &&
        !ellipsisIconRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutsideOfSideMenu);
    return () => {
      document.removeEventListener(
        'mousedown',
        checkIfClickedOutsideOfSideMenu,
      );
    };
  }, [open]);
  const signInToken = useSelector((state) => state.signIn.user.userInfo.token);
  const signUpToken = useSelector(
    (state) => state.signIn.signUp.isSignedUp.token,
  );

  const userInfoSignedIn = useSelector((state) => state.signIn.user.userInfo);
  const userInfoSignedUp = useSelector(
    (state) => state.signIn.signUp.isSignedUp,
  );

  const deleteQuestion = () => {
    if (
      studentId === userInfoSignedIn.id ||
      studentId === userInfoSignedUp.id
    ) {
      dispatch(
        deleteQuestionSlice({
          jwt: signInToken || signUpToken,
          Id: questionId,
        }),
      );
      dispatch(fetchQuestions());
    }
    return null;
  };

  const year = new Date(createdAt).getFullYear();
  const month = new Date(createdAt).getMonth() + 1;
  const day = new Date(createdAt).getDay() + 1;

  return (
    <div className=" relative max-w-3xl mx-auto">
      <div
        className={`mx-auto my-8 max-w-3xl px-6 pt-4 pb-6 rounded-md ${`${
          darkMode ? 'bg-secondaryDark' : 'bg-[#F0F0F0]'
        }`}  ${darkMode ? 'text-white' : 'text-black'}`}
      >
        <div className="flex flex-col justify-between">
          <div className="mb-10">
            {status === 'loading' ? (
              <div />
            ) : (
              <div className="flex justify-between">
                <div className="mr-[5rem] lg:mr-0 self-center lg:flex lg:flex-row-reverse">
                  <h1 className="flex pl-2 font-semibold self-center text-sm mr-auto">
                    {userName}

                    <p
                      className={`text-green-500 ml-4 text-xs  self-center  ${
                        studentId === userInfoSignedIn.id ||
                        studentId === userInfoSignedUp.id
                          ? 'flex'
                          : 'hidden'
                      } `}
                    >
                      Author
                    </p>
                  </h1>
                  <img
                    src={avatar}
                    className="w-10 h-10 rounded-full"
                    alt="user.png"
                  />
                </div>

                <div
                  ref={ellipsisIconRef}
                  className="text-xl flex mb-[1px] self-center cursor-pointer whitespace-nowrap"
                >
                  <p className="mr-3 text-xs  self-center cursor-text">{`${
                    day >= 10 ? `${day}` : `0${day}`
                  }/${month >= 10 ? `${month}` : `0${month}`}/${year}`}</p>
                  <FaEllipsisV
                    className={`${
                      studentId === userInfoSignedIn.id ||
                      studentId === userInfoSignedUp.id
                        ? 'flex'
                        : 'hidden'
                    } `}
                    onClick={() => setOpen(!open)}
                  />
                </div>

                <div
                  ref={sideMenuRef}
                  className={`absolute -right-0 top-12 lg:-right-48 lg:top-0 z-10 w-44 rounded-lg shadow-lg transition-all ease-in-out  py-1 lg:py-3 border-[1px] lg:border-0 ${
                    open ? 'show opacity-100' : 'hidden opacity-0 '
                  } ${darkMode ? 'bg-secondaryDark' : 'bg-[#F0F0F0]'}`}
                  id="dropdown"
                >
                  <button
                    className="w-full lg:w-full text-sm text-left text-red-600 hover:text-red-700 hover:bg-gray-200 transition px-2 lg:px-4 py-1 "
                    type="button"
                    onClick={() => deleteQuestion()}
                  >
                    Delete Question
                  </button>
                </div>
              </div>
            )}
          </div>

          <Link to={isLink ? `/question/${questionId}` : ''}>
            <h3 className="text-2xl mb-5">
              <span className="text-[#CA7560] ">Q</span>: {questionTitle}
            </h3>
            <p className="text-sm mb-7 pl-7">{questionText}</p>
          </Link>
        </div>
        <div className="relative px-2 lg:px-20 ">
          <Formik
            initialValues={{
              title: '',
              question: '',
            }}
            validationSchema={ReplySchema}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(
                addComment({
                  questionID: question.id,
                  creatorID: question.student.id, // Change this after merging with userslices
                }),
              );
              setTimeout(() => {
                setSubmitting(false);
              }, 1000);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="flex flex-col items-end text-black">
                  <div className="w-full">
                    <Field
                      as="textarea"
                      className={`my-1 w-[20rem] focus:ring-cusOrange focus:border-cusOrange block shadow-sm sm:text-sm border-gray-300 rounded-md ${
                        darkMode ? 'text-white' : 'text-black'
                      } ${darkMode ? 'bg-primaryDark' : 'bg-white'}`}
                      name="replyToQuestion"
                      rows={2}
                      placeholder="Answer the question"
                    />
                    <ErrorMessage
                      className="text-sm text-red-600"
                      component="div"
                      name="replyToQuestion"
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-gray-100 bg-orange rounded px-5 py-2 ml-2 my-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <FaSpinner className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                    ) : (
                      <FaReply />
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
Question.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  questionTitle: PropTypes.string.isRequired,
  questionText: PropTypes.string.isRequired,
  questionId: PropTypes.string,
  isLink: PropTypes.bool,
  status: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  question: PropTypes.any,
  studentId: PropTypes.string,
  createdAt: PropTypes.string,
};

Question.defaultProps = {
  isLink: false,
  questionId: '',
  status: '',
  question: null,
  studentId: '',
  createdAt: '',
};

export default Question;
