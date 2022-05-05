import { useSelector } from 'react-redux';
import Newsletter from '../Newsletter/Newsletter';
import { logoFooter } from '../../assets/logo/Logo';

function Footer() {
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);

  return (
    <div className={`${darkMode ? 'bg-cusOrange' : 'bg-zinc-100'} `}>
      <div className="container mx-auto justify-center grid pt-[5rem]">
        <h2 className="mb-6 text-2xl font-semibold  tracking-[.75px] text-center">
          Subscribe to Our Newsletter
        </h2>
        <Newsletter />
        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-1  xs:grid-rows-1 sm:grid-cols-1 mt-16 sm:justify-center xs:justify-center xs:align-middle xs:grid-cols-1 xs:pb-8">
          <div className="flex flex-col lg:block">
            {logoFooter}
            <div className="lg:text-left text-sm w-[screen] max-h-max xs:w-[260px] xs:h-[200px] mx-auto text-center">
              Studenteach is completed by two groups selected for the React.js
              bootcamp and back end bootcamp conducted by Re:coded. <br />
              Attendees of the bootcamps have completed their individual tasks
              by gathering occasionally 3 times a week. All attendees have been
              given chances to develop their skills in every possible realm they
              could possibly face in real world.
            </div>
          </div>
          <ul className="flex flex-col align-middle m-6 xs:m-1 sm:mt-1 text-center">
            <span className="p-1 font-semibold text-2xl xs:mt-16">
              Useful Links
            </span>
            <a
              href="https://www.re-coded.com/"
              className="mt-9 mb-3 xs:mt-3 inline-block"
            >
              <li className="text-secondary-color text-base hover:text-font-color">
                Re:coded
              </li>
            </a>
            <a
              href="https://flatironschool.com/"
              className="mt-9 mb-3 xs:mt-3 inline-block"
            >
              <li className="text-secondary-color text-base hover:text-font-color">
                Flatiron School
              </li>
            </a>
            <a
              href="https://github.com/ReCoded-Org/capstone-turkey-react-student-teach"
              className="mt-9 mb-3 xs:mt-3 inline-block"
            >
              <li className="text-secondary-color text-base hover:text-font-color">
                Project Repo
              </li>
            </a>
          </ul>
          <ul className="flex flex-col align-middle m-6 xs:m-1 sm:m-1 text-center">
            <span className="p-1 font-semibold text-2xl">Useful Links</span>
            <a
              href="https://reactjs.org/"
              className="mt-9 mb-3 xs:mt-3 inline-block"
            >
              <li className="text-secondary-color text-base hover:text-font-color">
                React
              </li>
            </a>
            <a
              href="https://overreacted.io/"
              className="mt-9 mb-3 xs:mt-3 inline-block"
            >
              <li className="text-secondary-color text-base hover:text-font-color">
                Overreacted.io
              </li>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/"
              className="mt-9 mb-3 xs:mt-3 inline-block"
            >
              <li className="text-secondary-color text-base hover:text-font-color">
                MDN
              </li>
            </a>
          </ul>
          <ul className="flex flex-col align-middle m-6 xs:mb-1 sm:m-1 text-center">
            <span className="p-1 font-semibold text-2xl">Useful Links</span>
            <a
              href="https://dev.to/"
              className="mt-9 mb-3 xs:mt-3 inline-block"
            >
              <li className="text-secondary-color text-base hover:text-font-color">
                dev.to
              </li>
            </a>
            <a
              href="https://www.youtube.com/c/WebDevSimplified"
              className="mt-9 mb-3 xs:mt-3 inline-block"
            >
              <li className="text-secondary-color text-base hover:text-font-color">
                Kyle
              </li>
            </a>
            <a
              href="https://www.youtube.com/c/DevEd"
              className="mt-9 mb-3 xs:mt-3 inline-block"
            >
              <li className="text-secondary-color text-base hover:text-font-color pb-10">
                Ed
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
