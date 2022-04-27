import { useState } from 'react';
import { useSelector } from 'react-redux';
import SignUp from '../../modals/SignUp/SignUp';
import SignIn from '../../modals/SignIn/SignIn';

function UserAuth() {
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);

  return (
    <ul className="flex justify-center items-center mt-2 ml-10 lg:ml-5 text-2xl lg:text-base lg:mt-0">
      <li>
        <button
          type="button"
          className={`pr-3 border-r-[2px]  lg:border-r-[1px]  transition-all ease-in-out inline-block text-black border-black ${
            darkMode ? 'hover:text-black' : 'hover:text-cusOrange'
          } ${darkMode ? 'lg:border-white' : 'lg:border-cusOrange'} ${
            darkMode ? 'lg:text-white' : 'text-black'
          }`}
          onClick={() => setSignUpModal(true)}
        >
          Sign Up
        </button>
        <SignUp
          open={signUpModal}
          setOpen={setSignUpModal}
          setSignIn={setSignInModal}
        />
      </li>
      <li>
        <button
          type="button"
          className={`pl-3 mr-10  transition-all ease-in-out inline-block ${
            darkMode ? 'hover:text-black' : 'hover:text-cusOrange'
          } `}
          onClick={() => setSignInModal(true)}
        >
          Sign In
        </button>
        <SignIn
          open={signInModal}
          setOpen={setSignInModal}
          setSignUp={setSignUpModal}
        />
      </li>
    </ul>
  );
}

export default UserAuth;
