import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { USERPROFILE_ROUTE } from '../../../routes';

function UserDropdownMenu({ openModal }) {
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);

  return (
    <div className="flex mb-5 ">
      <div
        className={`absolute right-3 top-[5rem] lg:top-14 z-10 w-34 rounded-lg shadow-lg  border-opacity-50transition  py-1 lg:py-3 border-[1px]  ${
          openModal ? 'show opacity-100' : 'hidden opacity-0 '
        } ${darkMode ? 'bg-secondaryDark' : 'bg-[#F0F0F0]'}`}
        id="dropdown"
      >
        <Link
          to={USERPROFILE_ROUTE}
          className="w-full lg:w-full text-sm hover:text-black hover:bg-gray-200 transition px-2 lg:px-4 py-1 text-center "
          type="button"
        >
          Profile
        </Link>

        <button
          className="w-full lg:w-full text-sm text-red-600 hover:text-red-700 hover:bg-gray-200 transition px-2 lg:px-4 py-1 text-center"
          type="button"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

UserDropdownMenu.propTypes = {
  openModal: PropTypes.bool.isRequired,
};
export default UserDropdownMenu;
