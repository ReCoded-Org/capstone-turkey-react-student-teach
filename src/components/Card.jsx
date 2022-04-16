import PropTypes from 'prop-types';

import githubLogo from '../assets/images/github-logo.png';
import linkedinLogo from '../assets/images/linkedin-logo.png';

function Card({ name, title, email, photo, github, linkedin }) {
  return (
    <div className="max-w-md bg-white rounded overflow-hidden border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 my-4 grid content-center">
      <img
        src={photo}
        alt="profilePicture"
        className="object-center w-[305px] h-[300px]"
      />
      <div className="p-2 bg-card-background w-full object-fit">
        <p className="mb-3 font-normal text-[#424242] text-sm dark:text-gray-400">
          <span className="text-gray-400 font-medium text-sm">Name: </span>
          {name}
        </p>
        <p className="mb-3 font-normal text-[#424242] text-sm dark:text-gray-400">
          <span className="text-gray-400 font-medium text-sm">Title: </span>
          {title}
        </p>
        <p className="mb-3 font-normal text-[#424242] text-sm dark:text-gray-400">
          <span className="text-gray-400 font-medium text-sm">
            Email Address:
          </span>
          {email}</p>
        <div className="flex flex-row justify-start">
          <a href={github} className="mr-1">
            <img src={githubLogo} alt="logo of github" height={18} width={18} />
          </a>
          <a href={linkedin} className='ml-1'>
            <img src={linkedinLogo} alt="logo of linkedin" height={18} width={18} />
          </a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  photo: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string,
};

export default Card;