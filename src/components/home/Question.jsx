/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllUsers } from '../../redux/features/fetchAllUsersSlice';

function Question({ id, profileImage, question, answer, student }) {
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  const users = useSelector((state) => state.fetchAllUsers.users);
  const user = users.filter((u) => (u.id === student ? u : false));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const userInfoSignedIn = useSelector((state) => state.signIn.user.userInfo);
  const userInfoSignedUp = useSelector(
    (state) => state.signIn.signUp.isSignedUp,
  );
  return (
    <div className="flex flex-col lg:even:float-right mb-4 xl:mb-12 w-12/12 lg:w-10/12 h-20 sm:h-28 truncate">
      <div
        className={`group relative  rounded-lg px-5 py-4 ${
          darkMode ? 'bg-secondaryDark' : 'bg-gray-100'
        } `}
      >
        <div className="flex justify-between items-center mb-2 ">
          <div className="flex items-center  ">
            <div className="">
              <img
                className="object-cover bg-white w-8 h-8 sm:w-10 xl:w-16 sm:h-10 xl:h-16 rounded-full mr-8 sm:mr-10 xl:mr-20"
                src={
                  user[0]?.avatar === undefined ? profileImage : user[0].avatar
                }
                alt="s profile pic"
              />
              <p
                className={`text-green-500 lg:ml-[.9rem]  mt-2 text-xs self-start lg:self-center ${
                  student === userInfoSignedIn.id ||
                  student === userInfoSignedUp.id
                    ? 'flex'
                    : 'hidden'
                } `}
              >
                Author
              </p>
            </div>

            <Link to={`/question/${id}`}>
              <div className="text-sm sm:text-base xl:text-xl  truncate w-[15rem] sm:w-[30rem] lg:w-[40rem] xl:w-[50rem] 2xl:w-[60rem]">
                <span className="text-orange">Q</span>: {question}
              </div>
              <div className="text-sm sm:text-base xl:text-xl text-[#7c7b7b] truncate w-[15rem] sm:w-[30rem] lg:w-[40rem] xl:w-[50rem] 2xl:w-[60rem] ">
                <span className="text-orange ml-4">A</span>: {answer}
              </div>
            </Link>
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
