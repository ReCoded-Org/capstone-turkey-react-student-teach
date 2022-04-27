import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserPicPlaceholder from '../../../assets/images/profilePlaceholer.png';
import { USERPROFILE_ROUTE } from '../../../routes';

function UserSection() {
  const { firstName } = useSelector((state) => state.signIn.user.userInfo);
  const { lastName } = useSelector((state) => state.signIn.user.userInfo);

  const formattedFirstName =
    firstName && firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const formattedLastName =
    lastName && lastName.charAt(0).toUpperCase() + lastName.slice(1);

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
        <h1 className="ml-3">
          {formattedFirstName} {formattedLastName}
        </h1>
      </div>
    </Link>
  );
}

export default UserSection;
