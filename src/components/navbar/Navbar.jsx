import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import { SiTailwindcss } from 'react-icons/si';
import { FaPlus } from 'react-icons/fa';
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  QUESTIONS_ROUTE,
} from '../../routes';

function Navbar() {
  const [dark, setDark] = useState(false);
  const [burger, setBurger] = useState(true);
  const [addQuestionModal, setAddQuestionModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  return (
    <nav className="flex flex-col justify-center items-center h-[55px] relative">
      <div className="flex flex-row-reverse justify-around items-center w-screen mt-3 lg:mt-0">
        <div>
          {burger ? (
            <GiHamburgerMenu
              onClick={() => setBurger(!burger)}
              className="burger-icons"
            />
          ) : (
            <VscChromeClose
              onClick={() => setBurger(!burger)}
              className="burger-icons"
            />
          )}
        </div>
        <div className="inline-block lg:hidden lg:mr-[6rem] hover:scale-110 ease-in-out transition-all">
          <button
            type="button"
            className="text-sm text-cusOrange lg:text-base p-[7px] rounded-md border-[1px] border-cusOrange lg:p-2 whitespace-nowrap"
          >
            Ask Question
            <FaPlus className="inline-block ml-1" />
          </button>
        </div>
        <SiTailwindcss className="block text-[2rem] lg:hidden " />
      </div>

      <div
        onClick={() => setBurger(true)}
        aria-hidden="true"
        className={`ml-2 w-screen top-[4rem] flex flex-col justify-center items-center lg:ml-0 lg:flex lg:flex-row lg:justify-between lg:items-center lg:h-[4rem] lg:top-[1px] absolute ${
          burger ? 'hidden' : null
        }`}
      >
        <div>
          <ul className="inline-block mt-4 text-2xl lg:mt-0 lg:text-base lg:flex lg:items-center text-center">
            <SiTailwindcss className="hidden mb-3 lg:mb-0 mx-10 text-[2rem] fill-current lg:block" />
            <li className="mb-3 lg:mb-0 lg:pr-3 lg:border-r-[1px] lg:border-cusOrange hover:text-cusOrange transition-all ease-in-out">
              <Link to={HOME_ROUTE}>Home</Link>
            </li>
            <li className="mb-3 lg:mb-0 lg:px-3 lg:border-r-[1px] lg:border-cusOrange hover:text-cusOrange transition-all ease-in-out">
              <Link to={QUESTIONS_ROUTE}>Questions</Link>
            </li>
            <li className="mb-3 lg:mb-0 lg:px-3 lg:border-r-[1px] lg:border-cusOrange hover:text-cusOrange transition-all ease-in-out">
              <Link to={CONTACT_ROUTE}>Contact</Link>
            </li>
            <li className="mb-3 lg:mb-0 lg:px-3 hover:text-cusOrange transition-all ease-in-out">
              <Link to={ABOUT_ROUTE}>About</Link>
            </li>
          </ul>
        </div>

        <div className="hidden mt-5 lg:mt-0 lg:mr-[6rem] lg:inline-block hover:scale-110 ease-in-out transition-all">
          <button
            type="button"
            className="text-sm text-cusOrange lg:text-base p-[7px] rounded-md border-[1px] border-cusOrange lg:p-2 whitespace-nowrap"
          >
            Ask Question
            <FaPlus className="inline-block ml-1" />
          </button>
        </div>

        <div className="flex flex-col-reverse lg:flex lg:flex-row lg:item-center">
          <div className="flex justify-center item-center mt-5 ml-[3rem] mr-10 lg:mt-0">
            <label
              htmlFor="toggleB"
              className="flex item-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  onClick={() => setDark(!dark)}
                  id="toggleB"
                  className="sr-only"
                />

                <div className="bgColor block border-[2px] rounded-md border-cusOrange w-[4rem] h-6 lg:border-[1px] lg:w-[3rem]" />

                <div className="dot left-1 top-1 bg-no-repeat w-9 h-4 rounded-3xl lg:w-6 transition absolute" />
              </div>
            </label>
          </div>
          <div className="inline-block">
            <ul className="flex justify-center items-center mt-2 ml-10 text-2xl lg:text-base lg:mt-0">
              <li>
                <button
                  type="button"
                  className="pr-3 border-r-[2px] border-cusOrange lg:border-r-[1px] hover:text-cusOrange transition-all ease-in-out inline-block"
                >
                  Sign Up
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="pl-3 mr-10 hover:text-cusOrange transition-all ease-in-out inline-block"
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
