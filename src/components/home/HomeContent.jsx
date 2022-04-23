import { useEffect, useState } from 'react';
import Question from './Question';
import allQuestions from './questions.json';
import AddQuestion from '../modals/AddQuestion/AddQuestion';

function HomeContent() {
  const [addQuestionModal, setAddQuestionModal] = useState(false);
  const [question, setQuestion] = useState();
  useEffect(() => {
    setQuestion(allQuestions.allQuestions);
  }, [question]);

  return (
    <div className="container mx-auto w-10/12 mt-8 pr-2 outline outline-2 outline-gray-100 rounded-md transition-all ease-in-out duration-300  text-center lg:text-left">
      <div className="flex">
        <div className="w-full z-20 mx-auto place-self-center w-12/12 sm:w-10/12  xl:w-7/12 mt-10">
          <h2 className="text-5xl sm:text-7xl text-orange mb-5 lg:mb-0">
            Student Teach
          </h2>
          <h4 className="font-semibold text-base sm:text-2xl text-black mt-2 sm:mt-9 py-0.5">
            We grow up by helping each other.
          </h4>
          <p className="mt-2 sm:mt-9 text-sm sm:text-xl  py-0.5 w-12/12 lg:w-10/12 ">
            This is a platform where you can ask your questions and help people
            find answers.
          </p>
          <p className="mt-2 sm:mt-9 text-sm sm:text-xl  py-0.5 w-12/12 lg:w-10/12 ">
            There are hundreds of categories in which you can ask your questions
            and you can learn by traveling through them.
          </p>
        </div>
        <div
          className="hidden w-5/12  bg-cover lg:flex  bg-right z-10 relative mr-10"
          style={{ backgroundImage: 'url("./images/home.png")' }}
        >
          <button
            type="button"
            className="bg-orange rounded-md text-xs w-44 h-10 scale-125 text-[#FFFFFF] inline-block bottom-[20px] xl:left-[40%] lg:left-[20%] hover:scale-[1.35] ease-in-out transition-all absolute"
            onClick={() => setAddQuestionModal(true)}
          >
            Ask Question +
          </button>
        </div>
        <AddQuestion open={addQuestionModal} setOpen={setAddQuestionModal} />
      </div>
      <button
        type="button"
        className=" lg:hidden mt-10 text-xs ml-5 sm:text-3xl mx-auto bg-orange rounded-md sm:w-[14rem] sm:h-[4rem] w-[8rem] h-[2rem] text-[#FFFFFF] absolute inline-block  left-[30%]"
        onClick={() => setAddQuestionModal(true)}
      >
        Ask Question +
      </button>
      <div className="mt-32 md:mr-7 lg:mr-10">
        {question?.map((q) => (
          <Question
            username={q.username}
            profileImage={q.profileImage}
            question={q.question}
            answer={q.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeContent;
