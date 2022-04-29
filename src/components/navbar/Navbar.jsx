/* eslint no-nested-ternary:1 */

import PropTypes from 'prop-types';
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

function Navbar({ onBurgerClick }) {
  const [dark, setDark] = useState(false);
  const [burger, setBurger] = useState(true);
  const [addQuestionModal, setAddQuestionModal] = useState(false);
  const [signOutOpen, setSignOutOpen] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  const signIn = useSelector((state) => state.signIn);
  const isSuccess = signIn.user.status;
  const isNotFoundUser = signIn.user.userInfo.error;
  const isUser = signIn.user.userInfo;

  useEffect(() => {
    dispatch(setDarkMode(dark));
  }, [dark, dispatch]);
  return (
    <nav
      className={`flex flex-col justify-center items-center max-h-[10vh] min-h-[7vh] relative ${
        !burger ? 'z-[100]' : 'z-0'
      } lg:z-0 ${darkMode ? 'bg-cusOrange' : 'bg-white'} ${
        darkMode ? 'text-white' : 'text-black'
      } shadow-sm`}
    >
      <div className="flex flex-row-reverse justify-around items-center w-screen">
        <div>
          {burger ? (
            <GiHamburgerMenu
              onClick={() => {
                onBurgerClick(!burger);
                setBurger(!burger);
              }}
              className="burger-icons"
            />
          ) : (
            <VscChromeClose
              onClick={() => {
                onBurgerClick(!burger);
                setBurger(!burger);
              }}
              className="burger-icons"
            />
          )}
        </div>
        <div className="inline-block lg:hidden lg:mr-[6rem] hover:scale-110 ease-in-out transition-all">
          <button
            type="button"
            className={`text-sm  lg:text-base p-[7px] rounded-md border-[1px]  lg:p-2 whitespace-nowrap ${
              darkMode ? 'text-white' : 'text-cusOrange'
            } ${darkMode ? 'border-white' : 'border-cusOrange'}`}
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
          onBurgerClick(true);
        }}
        aria-hidden="true"
        className={`ml-2 w-[100%] top-[4rem] flex flex-col justify-center items-center lg:ml-0 lg:flex lg:flex-row lg:justify-between lg:items-center lg:h-[4rem] lg:top-[1px] absolute ${
          burger ? 'hidden' : null
        }`}
      >
        <div>
          <ul className="inline-block mt-4 text-2xl lg:mt-0 lg:text-base lg:flex lg:items-center text-center">
            <Link to={HOME_ROUTE}>{logoFullScreen}</Link>
            <li
              className={`mb-3 lg:mb-0 lg:pr-3 text-black lg:text-inherit lg:border-r-[1px]  transition-all ease-in-out ${
                darkMode ? 'hover:text-black' : 'lg:hover:text-cusOrange'
              } ${darkMode ? 'lg:border-white' : 'lg:lg:border-cusOrange'}`}
            >
              <Link to={HOME_ROUTE}>Home</Link>
            </li>
            <li
              className={`mb-3 lg:mb-0 lg:px-3 text-black lg:text-inherit lg:border-r-[1px]   transition-all ease-in-out ${
                darkMode ? 'hover:text-black' : 'lg:hover:text-cusOrange'
              } ${darkMode ? 'lg:border-white' : 'lg:lg:border-cusOrange'}`}
            >
              <Link to={QUESTIONS_ROUTE}>Questions</Link>
            </li>
            <li
              className={`mb-3 lg:mb-0 lg:px-3 text-black lg:text-inherit lg:border-r-[1px]   transition-all ease-in-out ${
                darkMode ? 'hover:text-black' : 'lg:hover:text-cusOrange'
              } ${darkMode ? 'lg:border-white' : 'lg:lg:border-cusOrange'}`}
            >
              <Link to={CONTACT_ROUTE}>Contact</Link>
            </li>
            <li
              className={`mb-3 lg:mb-0 lg:px-3 text-black lg:text-inherit transition-all ease-in-out ${
                darkMode ? 'hover:text-black' : 'lg:hover:text-cusOrange'
              }`}
            >
              <Link to={ABOUT_ROUTE}>About</Link>
            </li>
            <li
              className={`mb-3 mx-5 transition-all ease-in-out ${
                darkMode ? 'hover:text-black' : 'lg:hover:text-cusOrange'
              }`}
            >
              <div
                className={`text-white ${
                  (isSuccess === 'success' && !isNotFoundUser) ||
                  isUser.firstName
                    ? 'block'
                    : 'hidden'
                }`}
              >
                <button
                  className="block text-red-600 lg:hidden"
                  type="button"
                  aria-hidden
                  onClick={() => setSignOutOpen(true)}
                >
                  Sign Out
                </button>
              </div>
            </li>
          </ul>
        </div>

        <div className="hidden mt-5 lg:mt-0 lg:mr-[6rem] lg:inline-block hover:scale-110 ease-in-out transition-all">
          <button
            type="button"
            className={`text-sm  lg:text-base p-[7px] rounded-md border-[1px] lg:p-2 whitespace-nowrap ${
              darkMode ? 'text-white' : 'text-cusOrange'
            } ${darkMode ? 'border-white' : 'border-cusOrange'}`}
            onClick={() => setAddQuestionModal(true)}
          >
            Ask Question
            <FaPlus className="inline-block ml-1" />
          </button>
        </div>
        <div className="flex flex-col-reverse lg:flex lg:flex-row lg:item-center lg:h-10 ">
          <div className="flex justify-center item-center mt-5 ml-[3rem] mr-[3rem] lg:mt-0">
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
                />
                <div className="bgColor block border-[2px] rounded-md  border-cusOrange w-[4rem] h-6 lg:border-[1px] lg:w-[3rem]  " />
                <div className="dot left-1 top-1 bg-no-repeat w-9 h-4 rounded-3xl lg:w-6 transition absolute lg:top-3 " />
              </div>
            </label>
          </div>
          <div className="lg:flex lg:items-center lg:justify-center w-fit text-black lg:text-inherit text-xl lg:text-base lg:ml-0">
            <UserAuth />
            <SignOut open={signOutOpen} setOpen={setSignOutOpen} />
            {(isSuccess === 'success' && !isNotFoundUser) ||
            isUser.firstName ? (
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
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  onBurgerClick: PropTypes.func,
};

Navbar.defaultProps = {
  onBurgerClick: true,
};

export default Navbar;
