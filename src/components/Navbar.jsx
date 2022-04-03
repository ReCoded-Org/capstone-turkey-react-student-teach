import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';

function Navbar() {
  const [dark, setDark] = useState(false);
  const [burger, setBurger] = useState(true);

  return (
    <nav className="flex flex-col justify-center items-center">
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
      <div
        className={`lg:flex lg:justify-between lg:items-center w-screen lg:h-[4rem] opacity-${
          burger ? 0 : 100
        } lg:opacity-100 transition-all ease-in-out duration-300`}
      >
        <div>
          <ul className="mt-4 text-2xl lg:mt-0 lg:text-base lg:flex lg:items-center lg:ml-10">
            <li className="mb-3 lg:pr-3 lg:border-r-2 lg:border-cusOrange hover:text-cusOrange transition-all ease-in-out">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-3 lg:px-3 lg:border-r-2 lg:border-cusOrange hover:text-cusOrange transition-all ease-in-out">
              <Link to="/questions">Questions</Link>
            </li>
            <li className="mb-3 lg:px-3 lg:border-r-2 lg:border-cusOrange hover:text-cusOrange transition-all ease-in-out">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="mb-3 lg:px-3 hover:text-cusOrange transition-all ease-in-out">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="mt-8 lg:mt-0 hover:scale-110 ease-in-out transition-all">
          <Link
            to="/question+"
            className="cursor-pointer max-w-[10rem] p-3 lg:p-2 rounded-md  bg-cusOrange "
          >
            <span className="text-2xl lg:text-base text-white">
              Ask Question+
            </span>
          </Link>
        </div>

        <div className=" flex flex-col-reverse lg:flex lg:flex-row lg:item-center">
          <div className="flex justify-center mt-5 ml-[3.7rem] lg:mt-0 item-center mr-10">
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

                <div className="bgColor block border-2 border-black-600 w-[4rem] lg:w-[3rem] h-6 rounded-md" />

                <div className="dot absolute left-1 top-1 bg-no-repeat w-9 lg:w-6 h-4 rounded-3xl transition" />
              </div>

              <div className="ml-3 text-red-700 font-medium" />
            </label>
          </div>
          <div>
            <ul className="mt-8 text-2xl  lg:text-base lg:mt-0 flex items-center justify-center ml-10">
              <li>
                <Link
                  to="/signup"
                  className="pr-3 border-r-2 border-cusOrange hover:text-cusOrange transition-all ease-in-out"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  className="cursor-pointer pl-3 mr-10 hover:text-cusOrange transition-all ease-in-out"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
