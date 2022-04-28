import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserPicPlaceholder from '../../../assets/images/profilePlaceholer.png';
import { USERPROFILE_ROUTE } from '../../../routes';

function UserSection() {
  const { firstName } = useSelector((state) => state.signIn.user.userInfo);
  const signedUpUserFirstName = useSelector(
    (state) => state.signIn.signUp.isSignedUp.firstName,
  );
  const { lastName } = useSelector((state) => state.signIn.user.userInfo);
  const signedUpUserLastName = useSelector(
    (state) => state.signIn.signUp.isSignedUp.lastName,
  );

  const formatName = (input) => {
    return input && input.charAt(0).toUpperCase() + input.slice(1);
  };

  const formattedFirstName = formatName(firstName);
  const formattedLastName = formatName(lastName);

  const formattedSignedUpfName = formatName(signedUpUserFirstName);
  const formattedSignedUplName = formatName(signedUpUserLastName);

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
          {formattedFirstName || formattedSignedUpfName}{' '}
          {formattedLastName || formattedSignedUplName}
        </h1>
      </div>
    </Link>
  );
}

export default UserSection;
