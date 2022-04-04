import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';

function BookmarkCard({ id, removeBookmarked, avatar, name, questionTitle }) {
  return (
    <div className="flex items-center">
      <img
        className=" mr-2 w-10 h-10 rounded-xl "
        src={avatar}
        alt="avatar.png"
      />
      <h3 className="  text-sm mr-4 w-16 font-medium truncate "> {name} </h3>
      <p className=" self-start h-full mr-8 w-2/3 text-sm line-clamp-2">
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
  avatar: PropTypes.string.isRequired,
  questionTitle: PropTypes.string.isRequired,
};
export default BookmarkCard;
