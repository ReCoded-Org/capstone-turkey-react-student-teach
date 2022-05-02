/* eslint no-nested-ternary:1 */
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { logoFullScreen, logoMobileScreen } from '../../assets/logo/Logo';
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  QUESTIONS_ROUTE,
} from '../../routes';
import AddQuestion from '../modals/AddQuestion/AddQuestion';
import { setDarkMode } from '../../redux/features/darkModeSlice';
import UserAuth from '../profile/userAuth/UserAuth';
import SignOut from '../modals/signOut/SignOut';
import CheckAuth from '../modals/checkAuth/CheckAuth';

function Navbar() {
  const darkModeStorage = localStorage.getItem('darkMode')
    ? JSON.parse(localStorage.getItem('darkMode'))
    : {};
  const [dark, setDark] = useState(true && darkModeStorage);
  const [burger, setBurger] = useState(true);
  const [addQuestionModal, setAddQuestionModal] = useState(false);
  const [signOutOpen, setSignOutOpen] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  const signIn = useSelector((state) => state.signIn);
  const isSuccess = signIn.user.status;
  const isUser = signIn.user.userInfo;
  const isUserSignedUp = signIn.signUp.isSignedUp;
  localStorage.setItem('darkMode', JSON.stringify(dark));

  useEffect(() => {
    dispatch(setDarkMode(dark));
  }, [dark, dispatch]);
  return (
    <nav
      className={`flex flex-col justify-center items-center relative  ${
        darkMode ? 'bg-cusOrange' : 'bg-white'
      } ${darkMode ? 'text-primaryDark' : 'text-black'} shadow-sm  `}
    >
      <div className="flex flex-row-reverse justify-around items-center w-screen  ">
        <div>
          {burger ? (
            <GiHamburgerMenu
              onClick={() => {
                setBurger(!burger);
              }}
              className="burger-icons"
            />
          ) : (
            <VscChromeClose
              onClick={() => {
                setBurger(!burger);
              }}
              className="burger-icons"
            />
          )}
        </div>
        <div className="inline-block lg:hidden">
          <button
            type="button"
            className={`text-sm rounded-md whitespace-nowrap border border-transparent text-white py-2 w-[8rem] ${
              darkMode ? 'hover:text-cusOrange' : 'hover:text-primary-color'
            } ${
              darkMode ? 'hover:border-white' : 'hover:border-primary-color'
            } ${darkMode ? 'bg-cusOrange' : 'bg-primary-color'} ${
              darkMode ? 'border-white' : 'border-primary-color'
            }`}
            onClick={() => setAddQuestionModal(true)}
          >
            Ask Question
            <FaPlus className="inline-block ml-1" />
          </button>
        </div>
        <Link to={HOME_ROUTE}>{logoMobileScreen}</Link>
      </div>

      <div
        onClick={() => {
          setBurger(true);
        }}
        aria-hidden="true"
        className={`ml-4 w-[100%] top-[4rem] flex flex-col justify-center items-center lg:ml-0 lg:flex lg:flex-row lg:justify-between lg:items-center lg:h-[4rem] lg:top-[1px]  ${
          burger ? 'hidden' : null
        }`}
      >
        <div>
          <ul className="inline-block mt-4 lg:mt-0 lg:text-base lg:flex lg:items-center text-center ">
            <Link to={HOME_ROUTE}>{logoFullScreen}</Link>
            <li
              className={`mb-3 border-b- lg:mb-0 lg:pr-3 text-primaryDark  lg:text-inherit lg:border-r-[1px]  transition-all ease-in-out  text-[1.1rem] ${
                darkMode
                  ? 'lg:hover:text-secondaryDark'
                  : 'lg:hover:text-cusOrange'
              } ${
                darkMode ? 'lg:border-primaryDark' : 'lg:lg:border-cusOrange'
              }`}
            >
              <Link to={HOME_ROUTE}>Home</Link>
            </li>
            <li
              className={`mb-3 lg:mb-0 lg:px-3 text-primaryDark lg:text-inherit lg:border-r-[1px]   transition-all ease-in-out text-[1.1rem] ${
                darkMode
                  ? 'hover:text-secondaryDark'
                  : 'lg:hover:text-cusOrange'
              } ${
                darkMode ? 'lg:border-primaryDark' : 'lg:lg:border-cusOrange'
              }`}
            >
              <Link to={QUESTIONS_ROUTE}>Questions</Link>
            </li>
            <li
              className={`mb-3 lg:mb-0 lg:px-3 text-primaryDark lg:text-inherit lg:border-r-[1px]   transition-all ease-in-out text-[1.1rem] ${
                darkMode
                  ? 'hover:text-secondaryDark'
                  : 'lg:hover:text-cusOrange'
              } ${
                darkMode ? 'lg:border-primaryDark' : 'lg:lg:border-cusOrange'
              }`}
            >
              <Link to={CONTACT_ROUTE}>Contact</Link>
            </li>
            <li
              className={`mb-3 lg:mb-0 lg:px-3 text-primaryDark lg:text-inherit transition-all ease-in-out text-[1.1rem] ${
                darkMode
                  ? 'hover:text-secondaryDark'
                  : 'lg:hover:text-cusOrange'
              }`}
            >
              <Link to={ABOUT_ROUTE}>About</Link>
            </li>
          </ul>
        </div>

        <div className="hidden mt-5 lg:mt-0 lg:mr-[6rem] lg:inline-block">
          <button
            type="button"
            className={`text-sm mr-10 p-[7px] rounded-md whitespace-nowrap border border-transparent  px-5 py-3 w-[10rem] xs:justify-center xs:align-middle ${
              darkMode ? 'text-white' : 'text-cusOrange'
            } ${darkMode ? 'bg-cusOrange' : 'bg-white'} ${
              darkMode ? 'hover:text-cusOrange' : 'hover:text-primary-color'
            } ${darkMode ? 'hover:hover:bg-white' : 'hover:bg-cusOrange'} ${
              darkMode ? 'hover:text-cusOrange' : 'hover:text-white'
            } ${
              darkMode ? 'hover:border-white' : 'hover:border-primary-color'
            } ${darkMode ? 'bg-cusOrange' : 'bg-white'} ${
              darkMode ? 'border-white' : 'border-primary-color'
            }`}
            onClick={() => setAddQuestionModal(true)}
          >
            Ask Question
            <FaPlus className="inline-block ml-1" />
          </button>
        </div>
        <div className="flex flex-col-reverse lg:flex lg:flex-row lg:item-center lg:h-10 ">
          <div className="flex justify-center item-center mt-5 ml-[3rem] mr-[3rem] lg:mt-0 pb-6 lg:pb-0">
            <label
              htmlFor="toggleB"
              className="flex item-center cursor-pointer"
            >
              <div className="relative lg:flex lg:items-center ">
                <input
                  type="checkbox"
                  onClick={() => setDark(!dark)}
                  id="toggleB"
                  className="sr-only"
                  checked={dark || false}
                  readOnly
                />
                <div className=" block border-[2px] rounded-md  border-cusOrange w-[4rem] h-6 lg:border-[1px] lg:w-[3rem] bgColor" />
                <div className="dot left-1 top-1 bg-no-repeat w-9 h-4 rounded-3xl lg:w-6 transition absolute lg:top-3 " />
              </div>
            </label>
          </div>
          <div className="lg:flex lg:items-center lg:justify-center w-fit text-black lg:text-inherit lg:text-lg flex justify-center items-center lg:mt-1 lg:ml-0 ">
            <UserAuth />
            <li
              className={`ml-5 border-l-2 border-secondaryDark pr-[2.9rem] pl-5 lg:px-0 lg:m-0 transition-all ease-in-out list-none ${
                darkMode ? 'hover:text-black' : 'lg:hover:text-cusOrange'
              }`}
            >
              <div
                className={`text-white ${
                  isSuccess === 'success' ||
                  signIn.signUp.status === 'success' ||
                  isUser.firstName ||
                  isUserSignedUp.firstName
                    ? 'block'
                    : 'hidden'
                }`}
              >
                <button
                  className="block text-red-700 lg:hidden"
                  type="button"
                  aria-hidden
                  onClick={() => setSignOutOpen(true)}
                >
                  Sign Out
                </button>
              </div>
            </li>
          </div>
          <SignOut open={signOutOpen} setOpen={setSignOutOpen} />
          {isSuccess === 'success' ||
          signIn.signUp.status === 'success' ||
          isUser.firstName ||
          isUserSignedUp.firstName ? (
            <AddQuestion
              open={addQuestionModal}
              setOpen={setAddQuestionModal}
            />
          ) : (
            <CheckAuth
              label="Sign in to add question."
              open={addQuestionModal}
              setOpen={setAddQuestionModal}
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
