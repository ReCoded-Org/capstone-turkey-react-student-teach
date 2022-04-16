import { useEffect, useState } from 'react';
import Question from './Question';
import allQuestions from './questions.json';

function HomeContent() {
  const [question, setQuestion] = useState();
  useEffect(() => {
    setQuestion(allQuestions.allQuestions);
  }, [question]);

  return (
    <div className="container sm:mx-auto w-10/12  mt-8 pr-2">
      <div className="flex ">
        <div className="w-full z-20 mx-auto place-self-center w-12/12 sm:w-10/12  xl:w-7/12">
          <h2 className="text-5xl sm:text-7xl text-orange">Student Teach</h2>
          <h4 className="font-semibold text-base sm:text-2xl text-black mt-2 sm:mt-9 py-0.5">
            We grow up by helping each other.
          </h4>
          <p className="mt-2 sm:mt-9 text-sm sm:text-xl  py-0.5 w-12/12 lg:w-10/12 ">
            This is a platform where you can ask your questions and help them
            people find answers.
          </p>
          <p className="mt-2 sm:mt-9 text-sm sm:text-xl  py-0.5 w-12/12 lg:w-10/12 ">
            There are hundreds of categories in which you can ask your questions
            and you can learn by traveling through them.
          </p>
        </div>
        <div
          className="hidden w-5/12  bg-cover lg:flex  bg-right w-full scale-150 -z-10"
          style={{ backgroundImage: 'url("./images/home.png")' }}
        >
          <button
            type="button"
            className="bg-orange rounded-[10px] text-xs w-44 h-10 text-[#FFFFFF] absolute inline-block bottom-[20px] xl:left-[40%] lg:left-[20%]"
          >
            Ask Question +
          </button>
        </div>
      </div>
      <button
        type="button"
        className=" lg:hidden mt-10 text-xs  sm:text-3xl mx-auto bg-orange rounded-[10px] sm:w-[14rem] sm:h-[4rem] w-[8rem] h-[2rem] text-[#FFFFFF] absolute inline-block  left-[30%]"
      >
        Ask Question +
      </button>
      <div className="mt-32">
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
