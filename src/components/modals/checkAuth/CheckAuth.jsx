import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

function CheckAuth({ open, setOpen, label }) {
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  return (
    <div>
      <Modal className="" label={label} open={open} setOpen={setOpen} set>
        <div>
          <h3>
            Have an account?
            <button
              className="text-cusOrange ml-2 mt-1"
              type="button"
              onClick={() => {
                setSignInModal(true);
                setOpen(false);
              }}
            >
              Sign In
            </button>
          </h3>
          <h3>
            Dont have an account yet?
            <button
              className="text-cusOrange ml-2"
              type="button"
              onClick={() => {
                setSignUpModal(true);
                setOpen(false);
              }}
            >
              Sign Up
            </button>
          </h3>
        </div>
      </Modal>

      {signInModal ? (
        <SignIn
          open={signInModal}
          setOpen={setSignInModal}
          setSignUp={setSignUpModal}
        />
      ) : null}

      {SignUp ? (
        <SignUp
          open={signUpModal}
          setOpen={setSignUpModal}
          setSignIn={setSignInModal}
        />
      ) : null}
    </div>
  );
}
CheckAuth.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default CheckAuth;
