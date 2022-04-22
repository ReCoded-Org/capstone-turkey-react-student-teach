import React from 'react';
import Newsletter from './Newsletter';

export const Footer = () => {
  return (
    <div className="container mx-auto justify-center grid">
      <h2 className="mb-6 text-2xl font-semibold text-font-color tracking-[.75px]">
        Subscribe to Our Newsletter
      </h2>
      <Newsletter />
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-1 md:grid-rows-4 xs:grid-rows-4 sm:grid-rows-4 sm:grid-cols-1 mt-16 sm:justify-center xs:justify-center xs:align-middle xs:grid-cols-1
      xs:pb-8">
          <div className="flex flex-col xs:justify-items-center xs:align-middle sm:justify-items-center md:justify-items-center lg:justify-center">
            <div className="w-[72px] h-[72px] rounded-full bg-gray-400 mr-96 ml-[10px] xs:ml-36">
              {/* this is an empty div to create a circle */}
            </div>
            <div className="p-[10px] text-left text-base w-[screen] max-h-max xs:w-[200px] xs:h-[300px] mx-auto text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in
              metus vel elit luctus luctus nec in arcu. Aliquam porttitor,
              sapien id hendrerit vestibulum, risus nulla accumsan libero, et
              convallis arcu nisl vitae justo. Etiam vel metus et mauris iaculis
              iaculis. Integer ut cursus ex.
            </div>
          </div>
        <ul className="flex flex-col align-middle m-6 xs:m-1 sm:mt-1">
          <span className="p-1 font-semibold text-2xl xs:mt-16">Useful Links</span>
          <a
            href="https://www.re-coded.com/"
            className="mt-9 mb-3 xs:mt-3 inline-block"
          >
            <li className="text-secondary-color text-base hover:text-font-color">Re:coded</li>
          </a>
          <a
            href="https://flatironschool.com/"
            className="mt-9 mb-3 xs:mt-3 inline-block"
          >
            <li className="text-secondary-color text-base hover:text-font-color">Flatiron School</li>
          </a>
          <a
            href="https://github.com/ReCoded-Org/capstone-turkey-react-student-teach" className="mt-9 mb-3 xs:mt-3 inline-block"
          >
            <li className="text-secondary-color text-base hover:text-font-color">Project Repo</li>
          </a>
        </ul>
        <ul className="flex flex-col align-middle m-6 xs:m-1 sm:m-1">
          <span className="p-1 font-semibold text-2xl">Useful Links</span>
          <a
            href='https://reactjs.org/'
            className="mt-9 mb-3 xs:mt-3 inline-block"
          >
            <li className="text-secondary-color text-base hover:text-font-color">React</li>
          </a>
          <a
            href="https://overreacted.io/"
            className="mt-9 mb-3 xs:mt-3 inline-block"
          >
            <li className="text-secondary-color text-base hover:text-font-color">Overreacted.io</li>
          </a>
          <a
            href='https://developer.mozilla.org/en-US/'
            className="mt-9 mb-3 xs:mt-3 inline-block"
          >
            <li className="text-secondary-color text-base hover:text-font-color">MDN</li>
          </a>
        </ul>
        <ul className="flex flex-col align-middle m-6 xs:mb-1">
          <span className="p-1 font-semibold text-2xl">Useful Links</span>
          <a
            href="https://dev.to/"
            className="mt-9 mb-3 xs:mt-3 inline-block"
          >
            <li className="text-secondary-color text-base hover:text-font-color">dev.to</li>
          </a>
          <a
            href="https://www.youtube.com/c/WebDevSimplified"
            className="mt-9 mb-3 xs:mt-3 inline-block"
          >
            <li className="text-secondary-color text-base hover:text-font-color">Kyle</li>
          </a>
          <a
            href="https://www.youtube.com/c/DevEd"
            className="mt-9 mb-3 xs:mt-3 inline-block"
          >
            <li className="text-secondary-color text-base hover:text-font-color">Ed</li>
          </a>
        </ul>
      </div>
    </div>
  );
};
