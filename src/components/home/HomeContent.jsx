import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import Question from './Question';
import { fetchQuestions } from '../../redux/features/questionsSlice';
import AddQuestion from '../modals/AddQuestion/AddQuestion';
import Hands from '../../assets/hands/Hands';
import Avatar from '../../assets/images/avatar.jpg';
import CheckAuth from '../modals/checkAuth/CheckAuth';

function HomeContent() {
  const [addQuestionModal, setAddQuestionModal] = useState(false);
  const signIn = useSelector((state) => state.signIn);
  const isSuccess = signIn.user.status;
  const isUser = signIn.user.userInfo;
  const isUserSignedUp = signIn.signUp.isSignedUp;
  const allQuestions = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);
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
        <section className="flex min-h-[30vh] lg:min-h-[50vh]">
          <div className="min-w-[30vw]">
            <h2 className="text-5xl sm:text-7xl text-orange mb-5 lg:mb-0">
              Students Teach
            </h2>
            <h4 className="font-semibold text-base sm:text-2xl mt-2 sm:mt-9 py-0.5">
              We grow up by helping each other.
            </h4>
            <p className="mt-2 sm:mt-9 text-sm sm:text-xl  py-0.5 w-12/12 lg:w-10/12 ">
              This is a platform where you can ask your questions and help
              people find answers.
            </p>
            <p className="mt-2 sm:mt-9 text-sm sm:text-xl  py-0.5 w-12/12 lg:w-10/12 ">
              There are hundreds of categories in which you can ask your
              questions and you can learn by traveling through them.
            </p>
          </div>

          <div className=" hidden min-w-[50vw] lg:flex flex-col items-center">
            <Hands
              css={`h-[20rem] w-fit  ${darkMode ? 'fill-white' : 'fill-black'}`}
            />
            <button
              type="button"
              className={`w-[16rem] h-auto border border-transparent text-white  hover:bg-white rounded-md px-5 py-3 ${
                darkMode ? 'hover:text-cusOrange' : 'hover:text-primary-color'
              } ${
                darkMode ? 'hover:border-white' : 'hover:border-primary-color'
              } ${darkMode ? 'bg-cusOrange' : 'bg-primary-color'} ${
                darkMode ? 'border-white' : 'border-primary-color'
              }`}
              onClick={() => setAddQuestionModal(true)}
            >
              Ask Question
              <FaPlus className="inline-block font-thin ml-1 mb-[2px]" />
            </button>
          </div>
        </section>
        <button
          type="button"
          className=" lg:hidden mt-5 bg-orange rounded-md  w-[10rem] h-[3rem] text-[#FFFFFF] "
          onClick={() => setAddQuestionModal(true)}
        >
          Ask Question
          <FaPlus className="inline-block font-thin ml-1 mb-[2px]" />
        </button>
        <div className="mt-32 md:mr-7 lg:mr-10 pb-10">
          {allQuestions.questions
            ?.slice(
              allQuestions.questions.length - 11,
              allQuestions.questions.length,
            )
            .reverse()
            .map((q) => (
              <Question
                key={uuidv4()}
                // eslint-disable-next-line no-underscore-dangle
                id={q._id}
                question={q.title}
                student={q.student}
                profileImage={Avatar}
                answer={
                  q.comments[0]
                    ? q.comments[0]
                    : 'Give an answer to the question'
                }
              />
            ))}
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

export default HomeContent;
