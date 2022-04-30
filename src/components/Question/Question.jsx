import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaEllipsisV, FaImage } from 'react-icons/fa';

function Question({ question, studentInfo }) {
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

  return (
    <div className=" relative max-w-3xl mx-auto">
      <div className=" mx-auto my-8 max-w-3xl px-6 pt-4 pb-6 bg-[#F0F0F0]">
        <div className="flex mb-5">
          <img
            src={studentInfo?.avatar || null}
            className="w-10 h-10 rounded-full"
            alt="user.png"
          />

          <p className="pl-2 font-semibold self-center text-sm mr-auto">
            {studentInfo?.firstName} {studentInfo?.lastName}
          </p>
          <div
            ref={ellipsisIconRef}
            className="text-xl self-center cursor-pointer"
          >
            <FaEllipsisV onClick={() => setOpen(!open)} />
          </div>
          <div
            ref={sideMenuRef}
            className={`absolute -right-0 top-12 lg:-right-48 lg:top-0 z-10 w-44 rounded-lg shadow-lg  border-[#CA7560] border-[4px]  border-opacity-50 bg-white transition  py-1 lg:py-3 ${
              open ? 'show opacity-100' : 'hidden opacity-0'
            }`}
            id="dropdown"
          >
            <button
              className=" w-full lg:w-full text-sm text-left text-gray-800 hover:text-gray-900 hover:bg-gray-200 transition px-2 lg:px-4 py-1"
              type="button"
            >
              Edit Question
            </button>
            <button
              className="w-full lg:w-full text-sm text-left hover:bg-gray-200 transition px-2 lg:px-4 py-1"
              type="button"
            >
              Add to Bookmark
            </button>
            <button
              className="w-full lg:w-full text-sm text-left  hover:bg-gray-200 transition px-2 lg:px-4 py-1"
              type="button"
            >
              Share
            </button>
            <button
              className="w-full lg:w-full text-sm text-left text-red-600 hover:text-red-700 hover:bg-gray-200 transition px-2 lg:px-4 py-1"
              type="button"
            >
              Delete Question
            </button>
          </div>
        </div>

        <h3 className="text-2xl mb-5">
          <span className="text-[#CA7560] ">Q</span>: {question?.title}
        </h3>
        <p className="text-sm mb-7 pl-7 ">{question?.content}</p>
      </div>

      <div className="relative w-full px-2 lg:px-20 ">
        <input
          className=" pr-14 md:pr-16 lg:pr-14 focus:outline-none border-[#CA7560] border-[3px] border-opacity-50 rounded-lg py-4 pl-5 text-xs w-full "
          type="text"
          placeholder="Answer the question..."
        />
        <FaImage className="absolute top-[19px] text-gray-600 cursor-pointer text-lg right-8 md:right-12 lg:right-28 hover:scale-105" />
      </div>
    </div>
  );
}
Question.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  question: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  studentInfo: PropTypes.any,
};
Question.defaultProps = {
  question: null,
  studentInfo: null,
};

export default Question;
