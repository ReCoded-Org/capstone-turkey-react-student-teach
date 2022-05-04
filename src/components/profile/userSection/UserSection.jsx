import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserPicPlaceholder from '../../../assets/images/profilePlaceholer.png';
import { USERPROFILE_ROUTE } from '../../../routes';
import UserDropdownMenu from '../../modals/userDropdownMenu/UserDropdownMenu';

function UserSection() {
  const { firstName } = useSelector((state) => state.signIn.user.userInfo);
  const signedUpUserFirstName = useSelector(
    (state) => state.signIn.signUp.isSignedUp.firstName,
  );
  const { lastName } = useSelector((state) => state.signIn.user.userInfo);
  const signedUpUserLastName = useSelector(
    (state) => state.signIn.signUp.isSignedUp.lastName,
  );
  const avatar = useSelector(
    (state) => state.fetchAllTutorReducer.user?.avatar,
  );
  const formatName = (input) => {
    return input && input.charAt(0).toUpperCase() + input.slice(1);
  };

  const formattedFirstName = formatName(firstName);
  const formattedLastName = formatName(lastName);

  const formattedSignedUpfName = formatName(signedUpUserFirstName);
  const formattedSignedUplName = formatName(signedUpUserLastName);

  return (
    <div>
      <div
        to={USERPROFILE_ROUTE}
        className="lg:flex justify-center items-center my-1 lg:my-0 lg:mr-10 lg:mt-1 select-none cursor-pointer w-[50%1] hidden"
        aria-hidden
      >
        <img
          className="h-10 w-10 rounded-full"
          src={avatar || UserPicPlaceholder}
          alt="user pic"
        />
        <div>
          <h1 className="ml-3">
            {formattedFirstName || formattedSignedUpfName}{' '}
            {formattedLastName || formattedSignedUplName}
          </h1>
        </div>
        <div className="hidden lg:block">
          <UserDropdownMenu />
        </div>
      </div>

      <Link
        to={USERPROFILE_ROUTE}
        className="lg:hidden flex flex-col justify-center items-center select-none cursor-pointer mt-5"
        aria-hidden
      >
        <img
          className="h-10 w-10 rounded-full"
          src={avatar || UserPicPlaceholder}
          alt="user pic"
        />
        <div>
          <h1 className="mt-1 rounded-md px-2 py-1 text-primaryDark self-center text-xl lg:text-[1.5rem]">
            {formattedFirstName || formattedSignedUpfName}{' '}
            {formattedLastName || formattedSignedUplName}
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default UserSection;
