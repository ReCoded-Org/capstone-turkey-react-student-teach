import { FaBookmark } from 'react-icons/fa';
/* eslint-disable react/prop-types */

function BookmarkCard({ item, removeBookmarked }) {
  return (
    <>
      <div className="flex items-center">
        <img
          className=" mr-2 w-10 h-10 rounded-xl "
          src={item.avatar}
          alt="avatar.png"
        />
        <h3 className="  text-sm mr-4 w-16 font-medium truncate ">
          {' '}
          {item.name}{' '}
        </h3>
        <p className=" self-start h-full mr-8 w-2/3 text-sm line-clamp-2">
          {' '}
          {item.questionTitle}{' '}
        </p>
        <FaBookmark
          onClick={() => removeBookmarked(item.id)}
          className="text-[#CA7560] text-xl cursor-pointer"
        />
      </div>
    </>
  );
}

export default BookmarkCard;
