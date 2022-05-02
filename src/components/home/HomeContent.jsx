import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from './Question';
// eslint-disable-next-line import/no-named-as-default
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

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
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
              Student Teach
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
              className="bg-orange rounded-md text-xs w-44 h-10 scale-125 text-[#FFFFFF] inline-block bottom-[20px] xl:left-[40%] lg:left-[20%] hover:scale-[1.35] ease-in-out transition-all"
              onClick={() => setAddQuestionModal(true)}
            >
              Ask Question +
            </button>
          </div>
        </section>
        <button
          type="button"
          className=" lg:hidden mt-10 text-xs ml-5 sm:text-3xl mx-auto bg-orange rounded-md sm:w-[14rem] sm:h-[4rem] w-[8rem] h-[2rem] text-[#FFFFFF] absolute inline-block  left-[30%]"
          onClick={() => setAddQuestionModal(true)}
        >
          Ask Question +
        </button>
        <div className="mt-32 md:mr-7 lg:mr-10 pb-10">
          {allQuestions.questions
            ?.slice(
              allQuestions.questions.length - 10,
              allQuestions.questions.length,
            )
            .reverse()
            .map((q) => (
              <Question
                // eslint-disable-next-line no-underscore-dangle
                key={q._id}
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
