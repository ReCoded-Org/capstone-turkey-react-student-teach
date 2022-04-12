/* eslint-disable react/button-has-type */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Question from './Question';
import allQuestions from './questions.json';
import styles from './home.module.css';

function HomeContent() {
  const [question, setquestion] = useState();
  useEffect(() => {
    setquestion(allQuestions.allQuestions);
  }, [question]);

  return (
    <div className="container sm:mx-auto w-10/12  mt-8 pr-2">
      <div className="flex ">
        <div
          className={`w-full z-20 mx-auto  sm:w-10/12  xl:w-7/12
            ${styles.main_text}
          `}
        >
          <h2 className="text-7xl text-orange">Student Teach</h2>
          <h4 className="font-semibold text-2xl text-black mt-9 py-0.5">
            We grow up by helping each other.
          </h4>
          <p className="mt-9 text-xl  py-0.5 w-10/12">
            This is a platform where you can ask your questions and help them
            people find answers.
          </p>
          <p className="mt-9 text-xl  py-0.5 w-10/12">
            There are hundreds of categories in which you can ask your questions
            and you can learn by travelling through them.
          </p>
        </div>
        <div
          className="hidden w-5/12  bg-cover lg:flex  bg-right w-full scale-150 z-10"
          style={{ backgroundImage: 'url("./images/home.png")' }}
        >
          <button className="bg-orange rounded-[10px] text-xl w-44 h-10 text-[#FFFFFF] absolute inline-block bottom-[20px] left-[125px] lg:left-[50px]">
            Ask Question +
          </button>
        </div>
      </div>
      <button className=" lg:hidden mt-10 mx-auto bg-orange rounded-[10px] text-xl w-[10rem] h-[3rem] text-[#FFFFFF] absolute inline-block  left-[40%]">
        Ask Question +
      </button>
      <div className="mt-24">
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
