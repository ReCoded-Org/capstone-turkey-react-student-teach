import { useSelector } from 'react-redux';
import { useState } from 'react';
import UserPicPlaceholder from '../../../assets/images/profilePlaceholer.png';
import { USERPROFILE_ROUTE } from '../../../routes';
import UserDropdownMenu from '../../modals/userDropdownMenu/UserDropdownMenu';

function UserSection() {
  const [openModal, setOpenModal] = useState(false);
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
    <div
      to={USERPROFILE_ROUTE}
      className="flex justify-center items-center my-1 lg:my-0 lg:mr-10 lg:mt-2 select-none cursor-pointer"
      onClick={() => setOpenModal(!openModal)}
      aria-hidden
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
      <div className="hidden lg:block">
        <UserDropdownMenu openModal={openModal} />
      </div>
    </div>
  );
}

export default UserSection;
