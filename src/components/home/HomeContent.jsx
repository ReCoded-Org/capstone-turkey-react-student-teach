/* eslint-disable react/button-has-type */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Question from './Question';
import allQuestions from './questions.json';

function HomeContent() {
  const [question, setquestion] = useState();
  useEffect(() => {
    setquestion(allQuestions.allQuestions);
    console.log(question);
  }, []);

  return (
    <div className="container ml-8 mt-8 pr-2">
      <div className="flex ">
        <div className="w-7/12 z-20">
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
          className="w-5/12 bg-cover bg-right w-full scale-150 z-10"
          style={{ backgroundImage: 'url("./images/home.png")' }}
        >
          <button className="bg-orange rounded-[10px] text-xl w-44 h-10 text-[#FFFFFF] absolute inline-block bottom-[20px] left-[150px]">
            Ask Question +
          </button>
        </div>
      </div>
      <div className="mt-20">
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
