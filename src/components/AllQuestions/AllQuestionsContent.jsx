/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Question from '../home/Question';
import { fetchQuestions } from '../../redux/features/questionsSlice';
import AddQuestion from '../modals/AddQuestion/AddQuestion';
import userProfilePlaceholder from '../../assets/images/profilePlaceholer.png';
import CheckAuth from '../modals/checkAuth/CheckAuth';
import search from '../../assets/images/search.svg';

function AllQuestionsContent() {
  const [addQuestionModal, setAddQuestionModal] = useState(false);
  const [questions, setQuestions] = useState();
  const [input, setInput] = useState();
  const signIn = useSelector((state) => state.signIn);
  const isSuccess = signIn.user.status;
  const isUser = signIn.user.userInfo;
  const isUserSignedUp = signIn.signUp.isSignedUp;
  const allQuestions = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  function onHandle(e) {
    if (e.length > 2 || e.length === 0) setInput(e);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `https://studentsteach.re-coded.com/api/questions/search?text=${input}`,
        );
        setQuestions(result.data);
      } catch (err) {
        return err;
      }
    };
    if (input?.length > 2) fetchData();
    dispatch(fetchQuestions());
  }, [dispatch, input]);
  const renderQuestion =
    questions?.length > 0 ? questions : allQuestions.questions;
  return (
    <div
      className={`${
        darkMode ? 'bg-secondaryDark' : 'bg-zinc-100 '
      } pt-5 pb-[5rem]`}
    >
      <div
        className={` container mx-auto w-full pt-8 rounded-md transition-all ease-in-out duration-300  text-center lg:text-left ${
          darkMode ? 'bg-primaryDark' : 'bg-white'
        } ${darkMode ? 'text-white' : 'text-black'} `}
      >
        <section className="flex min-h-[9vh] lg:min-h-[15vh]">
          <div className="relative  hidden min-w-[70vw] lg:flex flex-col items-center">
            <div className="group flex absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 bg-[#CA7560] rounded-[40px] p-2.5 ">
              <input
                className="group-hover:w-52  group-hover:py-2.5 w-0 border-none outline-none focus:ring-transparent p-0 bg-transparent border-0 text-[1.1rem] duration-500 ease-in text-white "
                type="text"
                placeholder="search...."
                onChange={(e) => onHandle(e.target.value)}
                style={{ twRingColor: 'none' }}
              />
              <span
                type="button"
                className="group-hover:bg-[#CA7560] hover:rotate-[360deg] scale-75 text-black float-right w-10 text-[1.3rem] h-10 rounded-full bg-[#CA7560] flex justify-center duration-500 cursor-pointer no-underline "
              >
                {/* <i className="fas fa-search" /> */}
                <img src={search} alt="" />
              </span>
            </div>
          </div>
        </section>
        <div className="mt-5 md:mr-7 lg:mr-10 pb-10">
          {renderQuestion
            ?.slice(renderQuestion.length - 11, renderQuestion.length)
            .reverse()
            .map((q) => (
              <Question
                key={uuidv4()}
                // eslint-disable-next-line no-underscore-dangle
                id={q._id}
                question={q.title}
                student={q.student}
                profileImage={userProfilePlaceholder}
                answer={
                  q.comments[0]
                    ? q.comments[0]
                    : 'Give an answer to the question'
                }
              />
            ))}
          <div className="flex flex-col items-center my-12">
            <div className="flex text-gray-700">
              <div className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-100 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-left w-6 h-6"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </div>
              <div className="flex h-12 font-medium rounded-full bg-gray-100">
                <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                  1
                </div>
                <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-[#CA7560] text-white ">
                  2
                </div>
                <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                  3
                </div>
                <div className="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">
                  2
                </div>
              </div>
              <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-100 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-right w-6 h-6"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {isSuccess === 'success' ||
        signIn.signUp.status === 'success' ||
        isUser.firstName ||
        isUserSignedUp.firstName ? (
          <AddQuestion open={addQuestionModal} setOpen={setAddQuestionModal} />
        ) : (
          <CheckAuth
            label="Sign in to add question."
            open={addQuestionModal}
            setOpen={setAddQuestionModal}
          />
        )}
      </div>
    </div>
  );
}
export default AllQuestionsContent;
