import { useState } from 'react';
import { useSelector } from 'react-redux';
import SignUp from '../../modals/SignUp/SignUp';
import SignIn from '../../modals/SignIn/SignIn';
import UserSection from '../userSection/UserSection';

function UserAuth() {
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const signIn = useSelector((state) => state.signIn);
  const isSuccess = signIn.user.status;
  const isNotFoundUser = signIn.user.userInfo.error;
  const isUser = signIn.user.userInfo;
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  const isSignedUpUser = useSelector(
    (state) => state.signIn.signUp.isSignedUp.firstName,
  );
  return (
    // eslint-disable-next-line
    (isSuccess === 'success' && !isNotFoundUser) ||
      isUser.firstName ||
      isSignedUpUser ? (
      <div className="lg:flex lg:items-center lg:justify-center lg:mb-2">
        <UserSection />
      </div>
    ) : (
      <div className="">
        <ul className="flex items-center mb-3 mt-5 lg:my-0 justify-center lg:mr-10 lg:mb-2 whitespace-nowrap">
          <li>
            <button
              type="button"
              className={`pr-3 border-r-[2px] lg:border-r-[1px] transition-all ease-in-out inline-block ${
                darkMode ? 'hover:text-black' : 'hover:text-cusOrange'
              } ${darkMode ? 'border-primaryDark' : 'border-cusOrange'}`}
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
              className={`pl-3 transition-all ease-in-out inline-block ${
                darkMode ? 'hover:text-black' : 'hover:text-cusOrange'
              }`}
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
      </div>
    )
  );
}

export default UserAuth;
