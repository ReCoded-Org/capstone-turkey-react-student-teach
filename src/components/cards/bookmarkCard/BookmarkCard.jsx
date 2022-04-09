import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';

function BookmarkCard({
  id,
  removeBookmarked,
  userImage,
  name,
  questionTitle,
}) {
  return (
    <div className="flex items-center">
      <img
        className=" mr-1 md:mr-2 lg:mr-2 w-8 h-8 lg:w-10 lg:h-10 rounded-xl "
        src={userImage}
        alt={`${userImage}.png`}
      />
      <h3 className="  text-sm mr-2 lg:mr-4 w-16 font-medium truncate ">
        {' '}
        {name}{' '}
      </h3>
      <p className=" self-start h-full mr-2 lg:mr-8 w-1/2 lg:w-2/3 text-xs lg:text-sm line-clamp-2">
        {' '}
        {questionTitle}{' '}
      </p>
      <FaBookmark
        onClick={() => removeBookmarked(id)}
        className="text-[#CA7560] text-xl cursor-pointer"
      />
    </div>
  );
}

BookmarkCard.propTypes = {
  id: PropTypes.number.isRequired,
  removeBookmarked: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  questionTitle: PropTypes.string.isRequired,
};
export default BookmarkCard;
