import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaEllipsisV, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

function Answer({ children, image, username }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col mt-8 max-w-[50rem]">
      <div className="group relative bg-gray-100 rounded-lg px-5 py-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <a href="/user-profile">
              <img
                src={image}
                alt={`${username}'s profile pic`}
                className="w-9 rounded-full mr-2"
              />
            </a>
            <a href="/user-profie">
              <h3 className="font-medium">{username}</h3>
            </a>
          </div>
          <button
            className=" opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-600 hover:bg-gray-200 transition rounded-full p-2"
            data-dropdown-toggle="dropdown"
            id="dropdown"
            onClick={() => setOpen(!open)}
            type="button"
          >
            <FaEllipsisV />
          </button>
          <div
            className={`absolute top-16 right-5 z-10 w-44 border rounded shadow-lg bg-white transition py-1 ${
              open ? 'show opacity-100' : 'hidden opacity-0'
            }`}
            id="dropdown"
          >
            <button
              className="w-full text-left text-gray-800 hover:text-gray-900 hover:bg-gray-200 transition px-4 py-1"
              type="button"
            >
              Edit answer
            </button>
            <button
              className="w-full text-left text-red-600 hover:text-red-700 hover:bg-gray-200 transition px-4 py-1"
              type="button"
            >
              Delete answer
            </button>
            <button
              className="w-full text-left text-green-700 hover:text-green-800 hover:bg-gray-200 transition px-4 py-1"
              type="button"
            >
              Mark as correct answer
            </button>
          </div>
        </div>
        {children}
      </div>
      <div className="flex justify-end px-5 py-3">
        <BelowButton className="text-gray-500 hover:text-gray-600">
          <FaThumbsUp />
        </BelowButton>
        <BelowButton className="text-gray-500 hover:text-gray-600">
          <FaThumbsDown />
        </BelowButton>
        <BelowButton className="text-sm text-orange-600 hover:text-orange-700">
          Reply
        </BelowButton>
      </div>
    </div>
  );
}
Answer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  image: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

function BelowButton({ children, className }) {
  return (
    <button
      type="button"
      className={`w-16 flex justify-center items-center bg-gray-100 hover:bg-gray-200 transition rounded-full py-1 mx-1 ${className}`}
    >
      {children}
    </button>
  );
}
BelowButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};
BelowButton.defaultProps = {
  children: '',
  className: '',
};

export default Answer;
