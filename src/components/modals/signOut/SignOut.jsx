import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';

function SignOut({ open, setOpen }) {
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);

  function SignOutLogic() {
    localStorage.removeItem('signedUser');
    localStorage.removeItem('userInfo');

    navigate('/');
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  return (
    <Modal label="Log Out ?" open={open} setOpen={setOpen}>
      <div className="flex items-center justify-center text-white">
        <button
          className={`text-lg w-[50wh] text-gray-100 bg-red-700 transition rounded px-8 py-2 mb-10 lg:mb-0   hover:bg-white border-[1px] ${
            darkMode ? 'hover:text-cusOrange' : 'hover:text-primary-color'
          } ${darkMode ? 'hover:border-white' : 'hover:border-primary-color'} ${
            darkMode ? 'bg-cusOrange' : 'bg-primary-color'
          } ${darkMode ? 'border-white' : 'border-primary-color'}`}
          type="button"
          onClick={() => SignOutLogic()}
        >
          Yes
        </button>
        <button
          className={`text-lg w-[50wh] text-gray-100 bg-cusOrange transition rounded px-8 py-2 mb-10 lg:mb-0   hover:bg-white border-[1px] ml-10 ${
            darkMode ? 'hover:text-cusOrange' : 'hover:text-primary-color'
          } ${darkMode ? 'hover:border-white' : 'hover:border-primary-color'} ${
            darkMode ? 'bg-cusOrange' : 'bg-primary-color'
          } ${darkMode ? 'border-white' : 'border-primary-color'}`}
          type="button"
          onClick={() => setOpen(false)}
        >
          No
        </button>
      </div>
    </Modal>
  );
}

SignOut.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default SignOut;
