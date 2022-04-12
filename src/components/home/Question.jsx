import PropTypes from 'prop-types';

function Question({ profileImage, question, answer }) {
  return (
    <div className="flex flex-col lg:even:float-right mb-4 xl:mb-12 w-12/12 lg:w-10/12 h-20 sm:h-28 truncate">
      <div className="bg-[#F0F0F0] group relative bg-gray-100  rounded-lg px-5 py-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center  ">
            <a href="/user-profile">
              <img
                className=" w-8 sm:w-10 xl:w-16 rounded-full mr-8 sm:mr-10 xl:mr-20"
                src={profileImage}
                alt="s profile pic"
              />
            </a>
            <a href="/question:id">
              <div className="text-sm sm:text-base xl:text-xl text-black truncate w-[15rem] sm:w-[30rem] lg:w-[40rem] xl:w-[50rem] 2xl:w-[60rem]">
                <span className="text-orange">Q</span>: {question}
              </div>
              <div className="text-sm sm:text-base xl:text-xl text-[#C4C4C4] truncate w-[15rem] sm:w-[30rem] lg:w-[40rem] xl:w-[50rem] 2xl:w-[60rem] ">
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
};
Question.defaultProps = {
  profileImage: '',
  question: '',
  answer: '',
};
