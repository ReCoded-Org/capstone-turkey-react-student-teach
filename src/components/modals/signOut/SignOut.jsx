import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';

function SignOut({ open, setOpen }) {
  const navigate = useNavigate();

  function SignOutLogic() {
    localStorage.clear();
    navigate('/');
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  return (
    <Modal label="You will be signed out" open={open} setOpen={setOpen}>
      <div className="flex items-center justify-center text-white">
        <button
          className="py-3 px-[3rem] mx-6 rounded-md  bg-red-600 hover:scale-110 transition-all ease-in-out"
          type="button"
          onClick={() => SignOutLogic()}
        >
          Yes
        </button>
        <button
          className="py-3 px-[3rem] mx-6 rounded-md bg-cusOrange hover:scale-110 transition-all ease-in-out"
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
  setOpen: PropTypes.bool.isRequired,
};

export default SignOut;
