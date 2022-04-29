import { useSelector } from 'react-redux';
import { useState } from 'react';
import UserPicPlaceholder from '../../../assets/images/profilePlaceholer.png';
import { USERPROFILE_ROUTE } from '../../../routes';
import UserDropdownMenu from '../../modals/userDropdownMenu/UserDropdownMenu';

function UserSection() {
  const [openModal, setOpenModal] = useState(false);

  const { firstName } = useSelector((state) => state.signIn.user.userInfo);
  const { lastName } = useSelector((state) => state.signIn.user.userInfo);
  const formattedFirstName =
    firstName && firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const formattedLastName =
    lastName && lastName.charAt(0).toUpperCase() + lastName.slice(1);

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
        <h1 className="ml-3 hover:text-black transition-all ease-in-out">
          {formattedFirstName} {formattedLastName}
        </h1>
      </div>
      <div className="hidden lg:block">
        <UserDropdownMenu openModal={openModal} />
      </div>
    </div>
  );
}

export default UserSection;
