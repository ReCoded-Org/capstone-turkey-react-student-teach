/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaEllipsisV } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import questionPhoto from '../../assets/images/questionImage.png';
import personPhoto from '../../assets/images/avatar.jpg';
import { deleteQuestionSlice } from '../../redux/features/deleteQuestionSlice';
import { fetchQuestions } from '../../redux/features/questionsSlice';

export const data = {
  id: 1,
  avatar: personPhoto,
  questionImage: questionPhoto,
  name: 'Maria1223',
  questionTitle: 'Lorem Ipsum is simply dummy ',
  questionText:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 1500s test clamp data classname Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 1500s test clamp data classname Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 1500s test clamp data classname',
};

function Question({
  avatar,
  userName,
  questionTitle,
  questionText,
  isLink,
  questionId,
  studentId,
  createdAt,
}) {
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const sideMenuRef = useRef();
  const ellipsisIconRef = useRef();
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
    <div className="relative max-w-3xl mx-auto">
      <div
        className={`mx-auto my-8 max-w-3xl px-6 pt-4 pb-6 rounded-md ${`${
          darkMode ? 'bg-secondaryDark' : 'bg-[#F0F0F0]'
        }`}  ${darkMode ? 'text-white' : 'text-black'}`}
      >
        <div className="flex  justify-between mb-5">
          <div className="flex whitespace-nowrap">
            <img
              src={avatar}
              className="w-10 h-10 rounded-full"
              alt="user.png"
            />
            <div className="mr-[5rem] lg:mr-0 self-center lg:flex lg:flex-row-reverse">
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
              <p className="pl-2 font-semibold self-center text-sm mr-auto">
                {userName}
              </p>
            </div>
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
        <Link to={isLink ? `/question/${questionId}` : ''}>
          <h3 className="text-2xl mb-5">
            <span className="text-[#CA7560] ">Q</span>: {questionTitle}
          </h3>
          <p className="text-sm mb-7 pl-7 line-clamp-3">{questionText}</p>
        </Link>
      </div>
      <div className="relative w-full px-2 lg:px-20  ">
        <input
          className={`line-clamp-5 pr-14 md:pr-16 lg:pr-14 focus:outline-none border-[#CA7560] border-[3px] border-opacity-50 rounded-lg py-4 pl-5 text-xs w-full ${
            darkMode ? 'bg-secondaryDark' : 'bg-[#F0F0F0]'
          } placeholder-slate-400`}
          type="text"
          placeholder="Answer the question..."
        />
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
  studentId: PropTypes.string,
  createdAt: PropTypes.string,
};

Question.defaultProps = {
  isLink: false,
  questionId: '',
  studentId: '',
  createdAt: '',
};

export default Question;
