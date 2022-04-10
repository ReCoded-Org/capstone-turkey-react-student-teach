import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaEllipsisV, FaImage } from 'react-icons/fa';
import questionPhoto from '../../assets/images/questionImage.png';
import personPhoto from '../../assets/images/avatar.jpg';

export const data = [
  {
    id: 1,
    avatar: personPhoto,
    questionImage: questionPhoto,
    name: 'Maria1223',
    questionTitle: 'Lorem Ipsum is simply dummy ',
    questionText:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 1500s test clamp data classname Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 1500s test clamp data classname Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 1500s test clamp data classname',
  },
];

function Question({
  avatar = `${data[0].avatar}`,
  questionImage = data[0].questionImage,
  userName = data[0].name,
  questionTitle = data[0].questionTitle,
  questionText = data[0].questionText,
}) {
  const [open, setOpen] = useState(false);
  const sideMenuRef = useRef();
  const ellipsisIconRef = useRef();
  const [fullImageSize, setFullImageSize] = useState(false);

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
          <img src={avatar} className="w-10 h-10 rounded-full" alt="user.png" />
          <p className="pl-2 font-semibold self-center text-sm mr-auto">
            {userName}
          </p>
          <div
            ref={ellipsisIconRef}
            className="text-xl   self-center cursor-pointer"
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
          <span className="text-[#CA7560] ">Q</span>: {questionTitle}
        </h3>
        <p className="text-sm mb-7 pl-7 line-clamp-3">{questionText}</p>

        <div
          className={
            fullImageSize
              ? 'fixed top-0 bottom-0 left-0 right-2 lg:left-80 lg:right-0 w-screen h-screen flex items-center z-50'
              : 'hover:scale-105 transition-transform mx-auto w-1/2'
          }
        >
          <button
            onClick={() => setFullImageSize(!fullImageSize)}
            type="button"
          >
            <img
              className=" rounded-xl transition-transform hover:scale-105 hover:cursor-pointer z-0 "
              src={questionImage}
              alt="question.png"
            />
          </button>
        </div>
      </div>

      <div className="relative w-full px-2 lg:px-20 ">
        <input
          className=" line-clamp-5 pr-14 md:pr-16 lg:pr-14 focus:outline-none border-[#CA7560] border-[3px] border-opacity-50 rounded-lg py-4 pl-5 text-xs w-full "
          type="text"
          placeholder="Answer the question..."
        />
        <FaImage className="absolute top-[19px] text-gray-600 cursor-pointer text-lg right-8 md:right-12 lg:right-28 hover:scale-105" />
      </div>
    </div>
  );
}
Question.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  questionTitle: PropTypes.string.isRequired,
  questionText: PropTypes.string.isRequired,
  questionImage: PropTypes.string.isRequired,
};

export default Question;
