import { useEffect, useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Image } from 'cloudinary-react';
import coverPlaceholder from '../../assets/images/coverPlaceholder.jpg';
import userProfilePlaceholder from '../../assets/images/profilePlaceholer.png';
import LatestAnswers from '../../components/profile/latestAnswers/LatestAnswers';
import LatestQuestions from '../../components/profile/latestQuestions/LatestQuestions';
import ProfileSetting from '../../components/modals/profileEdit/profilePersonalInfoEdit/ProfilePersonalInfoEdit';
import ProfilePicEdit from '../../components/modals/profileEdit/profilePicEdit/ProfilePicEdit';

function UserProfile() {
  const [latestSection, setLatestSection] = useState(false);
  const [open, setOpen] = useState(false);
  const [openPicEdit, setOpenPicEdit] = useState(false);
  const [picStatus, setPicStatus] = useState([]);
  const [cloudinaryStatus, setCloudinaryStatus] = useState([]);
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  const avatar = useSelector(
    (state) => state.fetchAllTutorReducer.user?.avatar,
  );
  const { firstName } = useSelector((state) => state.signIn.user.userInfo);
  const { lastName } = useSelector((state) => state.signIn.user.userInfo);
  const firstNameSignUp = useSelector(
    (state) => state.signIn.signUp.isSignedUp.firstName,
  );
  const lastNameSignUp = useSelector(
    (state) => state.signIn.signUp.isSignedUp.lastName,
  );
  const formattedFirstName =
    firstName && firstName.charAt(0).toUpperCase() + firstName.slice(1);
  const formattedLastName =
    lastName && lastName.charAt(0).toUpperCase() + lastName.slice(1);
  const formattedFirstNameSignUp =
    firstNameSignUp &&
    firstNameSignUp.charAt(0).toUpperCase() + firstNameSignUp.slice(1);
  const formattedLastSignUp =
    lastNameSignUp &&
    lastNameSignUp.charAt(0).toUpperCase() + lastNameSignUp.slice(1);
  const editProfilePicStatus = useSelector(
    (state) => state.editProfilePicReducer?.message,
  );
  const uploadPicCloudinaryStatus = useSelector(
    (state) => state.uploadPicCloudinaryReducer?.data,
  );

  useEffect(() => {
    let cancel = true;
    if (cancel) {
      setPicStatus(editProfilePicStatus[editProfilePicStatus.length - 1]);
      setCloudinaryStatus(
        uploadPicCloudinaryStatus[uploadPicCloudinaryStatus.length - 1]?.status,
      );
    }

    const timer = setTimeout(() => {
      setPicStatus([]);
      setCloudinaryStatus([]);
    }, 3000);

    return () => {
      cancel = false;
      clearTimeout(timer);
    };
  }, [editProfilePicStatus, uploadPicCloudinaryStatus]);

  return (
    <div
      className={`${darkMode ? 'bg-primaryDark' : 'bg-white'}  ${
        darkMode ? 'text-white' : 'text-black'
      } lg:pb-[5rem]`}
    >
      <section className="min-h-[30vh] pt-10 lg:min-h-[50vh] flex justify-center">
        <div className="self-center">
          <div className="relative self-center">
            <img
              className="w-[50rem] h-[8rem] object-fill rounded-md lg:h-[20rem] select-none"
              src={coverPlaceholder}
              alt="cover"
            />
          </div>
          <div className="mt-3">
            <div className="relative ">
              <Image
                cloudName="eyeblinded"
                src={avatar || userProfilePlaceholder}
                className="h-[4rem] w-[4rem] object-cover ml-5 rounded-full absolute border-[2px] border-white top-[-3.3rem] lg:top-[-5rem] lg:h-[7rem] lg:w-[7rem] lg:ml-[3rem] cursor-pointer select-none"
                onClick={() => setOpenPicEdit(true)}
                alt="profile"
                aria-hidden="true"
              />
              <span
                onClick={() => setOpenPicEdit(true)}
                className="h-[6.9rem] w-[6.9rem] top-[-5rem] left-[3.1rem] bg-white absolute rounded-full opacity-0 hover:opacity-60 font-bold cursor-pointer transition-all ease-in-out duration-300 lg:flex justify-center items-center hidden text-black"
                aria-hidden
              >
                <h1 className="opacity-100">Edit</h1>
              </span>
            </div>

            <div className="flex flex-col justify-center items-center relative">
              {picStatus?.error && cloudinaryStatus === 400 ? (
                <h1 className="text-red-500 top-[-5px] absolute">
                  Failed to update picture
                </h1>
              ) : (
                ''
              )}
              {picStatus?.message && cloudinaryStatus === 200 ? (
                <h1 className="text-green-500 top-[-5px] absolute">
                  Updated successfully
                </h1>
              ) : (
                ''
              )}
              <IoSettingsOutline
                onClick={() => setOpen(true)}
                className="place-self-end mr-3 p-1 text-2xl lg:text-3xl  rounded-full text-cusOrange cursor-pointer hover:bg-cusOrange hover:text-white hover:opacity-90 ease-in-out transition-all duration-300 absolute top-[-.6rem]"
              />
              <h1 className="mt-5 font-semibold text-xl">
                {formattedFirstName || formattedFirstNameSignUp}{' '}
                {formattedLastName || formattedLastSignUp}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <ProfileSetting open={open} setOpen={setOpen} />
      <ProfilePicEdit
        open={openPicEdit}
        setOpen={setOpenPicEdit}
        label="Update your picture"
      />

      <section className="text-sm md:min-h-[50vh] m-7 mb-0 lg:min-h-[70vh] lg:text-base">
        <div className="flex justify-around items-center lg:justify-center p-5 lg:mr-7">
          <button
            className={`px-3 py-2 lg:px-5 lg:py-3 lg:mr-10 ease-in-out transition-all hover:text-cusOrange ${
              !latestSection
                ? 'text-white rounded bg-cusOrange hover:text-white '
                : null
            }`}
            onClick={() => setLatestSection(false)}
            type="button"
          >
            Latest Questions
          </button>

          <button
            className={`px-3 py-2 lg:px-5 lg:py-3 ease-in-out transition-all hover:text-cusOrange lg:ml-10 ${
              latestSection
                ? 'text-white rounded bg-cusOrange hover:text-white'
                : null
            }`}
            onClick={() => setLatestSection(true)}
            type="button"
          >
            Latest Answers
          </button>
        </div>
        <div className="flex flex-col items-center justify-center pb-10 text-black">
          {!latestSection ? <LatestQuestions /> : <LatestAnswers />}
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
