// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function Question({ profileImage, question, answer }) {
  return (
    <div className="flex flex-col even:float-right mb-12 w-10/12 h-28 truncate">
      <div className="bg-[#F0F0F0] group relative bg-gray-100  rounded-lg px-5 py-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center  ">
            <a href="/user-profile">
              <img
                className="w-16 rounded-full mr-24"
                src={profileImage}
                alt="s profile pic"
              />
            </a>
            <a href="/question:id">
              <div className="font-medium text-black truncate w-[51rem] ">
                <span className="text-orange">Q</span>: {question}
              </div>
              <div className="font-medium text-[#C4C4C4] truncate w-[52rem]">
                <span className="text-orange ml-4">A</span>: {answer}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
