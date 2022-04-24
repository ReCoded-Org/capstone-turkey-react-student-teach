import { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import coverPlaceholder from '../../assets/images/cover-placeholder.png';
import userProfilePlaceholder from '../../assets/images/Profile_placeholer.png';
import LatestAnswers from '../../components/profile/latestAnswers/LatestAnswers';
import LatestQuestions from '../../components/profile/latestQuestions/LatestQuestions';
import ProfileSetting from '../../components/modals/profileEdit/profilePersonalInfoEdit/ProfilePersonalInfoEdit';
import ProfilePicEdit from '../../components/modals/profileEdit/profilePicEdit/ProfilePicEdit';

function UserProfile() {
  const [latestSection, setLatestSection] = useState(false);
  const [open, setOpen] = useState(false);
  const [openPicEdit, setOpenPicEdit] = useState(false);
  const [openCoverEdit, setOpenCoverEdit] = useState(false);

  return (
    <div>
      <section className="md:min-h-[30vh] mt-10 m-8 lg:min-h-[50vh] lg:mx-[0rem] lg:flex lg:justify-center">
        <div>
          <img
            className="w-[50rem] h-[8rem] object-fill rounded-md lg:h-[20rem] cursor-pointer"
            src={coverPlaceholder}
            alt="cover"
            onClick={() => setOpenCoverEdit(true)}
            aria-hidden="true"
          />
          <div className="mt-3">
            <img
              className="h-[4rem] w-[4rem] object-cover ml-5 rounded-full absolute border-[2px] border-white top-[11.3rem] lg:top-[21rem] lg:h-[7rem] lg:w-[7rem] lg:ml-[3rem] cursor-pointer"
              onClick={() => setOpenPicEdit(true)}
              src={userProfilePlaceholder}
              alt="profile"
              aria-hidden="true"
            />

            <div className="flex flex-col justify-center items-center">
              <IoSettingsOutline
                onClick={() => setOpen(true)}
                className="place-self-end mr-3 text-cusOrange cursor-pointer hover:scale-110 ease-in-out transition-all"
              />
              <h1 className="mt-2 ">Username</h1>
              <h1 className="mt-2 ">Web Developer</h1>
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
      <ProfilePicEdit
        open={openCoverEdit}
        setOpen={setOpenCoverEdit}
        label="Update cover picture"
      />
      <section className="text-sm md:min-h-[50vh] m-7 lg:min-h-[70vh] lg:text-base">
        <div className="flex justify-around items-center lg:justify-center lg:mr-7">
          <button
            className={`px-3 py-2 lg:px-5 lg:py-3 lg:mr-10 hover:scale-110 ease-in-out transition-all hover:text-cusOrange ${
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
            className={`px-3 py-2 lg:px-5 lg:py-3 hover:scale-110 ease-in-out transition-all hover:text-cusOrange lg:ml-10 ${
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
        <div className="flex flex-col items-center justify-center lg:pb-10">
          {!latestSection ? <LatestQuestions /> : <LatestAnswers />}
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
