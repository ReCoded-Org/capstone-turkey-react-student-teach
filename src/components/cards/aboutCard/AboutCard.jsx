import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import githubLogo from '../../../assets/images/github-logo.png';
import linkedinLogo from '../../../assets/images/linkedin-logo.png';

function UserCard({ name, title, email, photo, github, linkedin }) {
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);

  return (
    <div className="max-w-md bg-white rounded overflow-hidden border-gray-200 shadow-md   my-4 grid content-center">
      <img
        src={photo}
        alt="profilePicture"
        className="object-center w-[305px] h-[300px]"
      />
      <div
        className={`p-2  w-full object-fit ${
          darkMode ? 'bg-secondaryDark' : 'bg-zinc-100'
        }`}
      >
        <p className="mb-3 font-normal  text-sm dark:text-gray-400">
          <span className="text-gray-400 font-medium text-sm">Name: </span>
          {name}
        </p>
        <p className="mb-3 font-normal  text-sm dark:text-gray-400">
          <span className="text-gray-400 font-medium text-sm">Title: </span>
          {title}
        </p>
        <p className="mb-3 font-normal  text-sm dark:text-gray-400">
          <span className="text-gray-400 font-medium text-sm">
            Email Address:
          </span>
          {email}
        </p>
        <div className="flex flex-row justify-start">
          <a href={github} className="mr-1">
            <img src={githubLogo} alt="logo of github" height={18} width={18} />
          </a>
          <a href={linkedin} className="ml-1">
            <img
              src={linkedinLogo}
              alt="logo of linkedin"
              height={18}
              width={18}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  photo: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string,
};

UserCard.defaultProps = {
  name: '',
  title: '',
  email: '',
  photo: '',
  github: '',
  linkedin: '',
};

export default UserCard;
