import { Link } from 'react-router-dom';
import UserPicPlaceholder from '../../../assets/images/profilePlaceholer.png';
import { USERPROFILE_ROUTE } from '../../../routes';

function UserSection() {
  return (
    <Link
      to={USERPROFILE_ROUTE}
      className="flex justify-center items-center my-1 lg:my-0 lg:mr-10"
    >
      <img
        className="h-10 rounded-3xl select-none"
        src={UserPicPlaceholder}
        alt="user pic"
      />
      <div>
        <h1 className="ml-3">Username</h1>
      </div>
    </Link>
  );
}

export default UserSection;
