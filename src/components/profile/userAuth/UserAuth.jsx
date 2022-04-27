import { useState } from 'react';
import { useSelector } from 'react-redux';
import SignUp from '../../modals/SignUp/SignUp';
import SignIn from '../../modals/SignIn/SignIn';
import UserSection from '../userSection/UserSection';

function UserAuth() {
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  // const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  const signIn = useSelector((state) => state.signIn);
  const isSuccess = signIn.user.status;
  const isNotFoundUser = signIn.user.userInfo.error;
  const isUser = signIn.user.userInfo;

  return (
    // eslint-disable-next-line
    (isSuccess === 'success' && !isNotFoundUser) || isUser.firstName ? (
      <div className="lg:flex lg:items-center lg:justify-center lg:-mt-2">
        <UserSection />
      </div>
    ) : (
      <ul className="flex justify-center items-center mt-2 ml-10 text-2xl lg:text-base lg:mt-0">
        <li>
          <button
            type="button"
            className="pr-3 border-r-[2px] border-cusOrange lg:border-r-[1px] hover:text-cusOrange transition-all ease-in-out inline-block"
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
            className="pl-3 mr-10 hover:text-cusOrange transition-all ease-in-out inline-block"
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
    )
  );
}

export default UserAuth;
