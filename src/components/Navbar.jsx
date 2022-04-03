import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [dark, setDark] = useState(false);
  return (
    <nav className="flex justify-between items-center h-[4rem]">
      <div>
        <ul className="flex items-center ml-10">
          <li className="pr-3 border-r-2 border-cusOrange hover:text-cusOrange transition-all ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3  border-r-2 border-cusOrange hover:text-cusOrange transition-all ease-in-out">
            <Link to="/questions">Questions</Link>
          </li>
          <li className="px-3 border-r-2 border-cusOrange hover:text-cusOrange transition-all ease-in-out">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3 hover:text-cusOrange transition-all ease-in-out">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="hover:scale-110 ease-in-out transition-all">
        <Link
          to="/question+"
          className="cursor-pointer max-w-[10rem] p-2 rounded-md  bg-cusOrange "
        >
          <span className="text-white">Ask Question+</span>
        </Link>
      </div>

      <div className="flex flex-row item-center">
        <div className="flex item-center mr-10">
          <label htmlFor="toggleB" className="flex item-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                onClick={() => setDark(!dark)}
                id="toggleB"
                className="sr-only"
              />

              <div className="bgColor block border-2     border-black-600 w-[3rem] h-6 rounded-md" />

              <div className="dot absolute left-1 top-1 bg-no-repeat w-6 h-4 rounded-3xl transition" />
            </div>

            <div className="ml-3 text-red-700 font-medium" />
          </label>
        </div>
        <div>
          <ul className="flex items-center ml-10">
            <li>
              <Link
                to="/signup"
                className="pr-3 border-r-2  border-cusOrange hover:text-cusOrange transition-all ease-in-out"
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
    </nav>
  );
}

export default Navbar;
