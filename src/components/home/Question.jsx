import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Question({ id, profileImage, question, answer, student }) {
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://studentsteach.re-coded.com/api/tutors/${student}`,
        );
        const json = await response.json();
        setUser(json);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);
  console.log(user);
  return (
    <div className="flex flex-col lg:even:float-right mb-4 xl:mb-12 w-12/12 lg:w-10/12 h-20 sm:h-28 truncate">
      <div
        className={`group relative  rounded-lg px-5 py-4 ${
          darkMode ? 'bg-secondaryDark' : 'bg-gray-100'
        } `}
      >
        <div className="flex justify-between items-center mb-2 ">
          <div className="flex items-center  ">
            <a href="/user-profile">
              <img
                className=" w-8 h-8 sm:w-10 xl:w-16 sm:h-10 xl:h-16 rounded-full mr-8 sm:mr-10 xl:mr-20"
                src={user?.avatar === undefined ? profileImage : user.avatar}
                alt="s profile pic"
              />
            </a>
            <a href={`/question/${id}`}>
              <div className="text-sm sm:text-base xl:text-xl  truncate w-[15rem] sm:w-[30rem] lg:w-[40rem] xl:w-[50rem] 2xl:w-[60rem]">
                <span className="text-orange">Q</span>: {question}
              </div>
              <div className="text-sm sm:text-base xl:text-xl text-[#7c7b7b] truncate w-[15rem] sm:w-[30rem] lg:w-[40rem] xl:w-[50rem] 2xl:w-[60rem] ">
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
Question.propTypes = {
  profileImage: PropTypes.string,
  question: PropTypes.string,
  answer: PropTypes.string,
  student: PropTypes.string,
  id: PropTypes.string,
};
Question.defaultProps = {
  profileImage: '',
  question: '',
  answer: '',
  student: '',
  id: '',
};
