import { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import coverPlaceholder from '../../assets/images/cover-placeholder.png';
import userProfilePlaceholder from '../../assets/images/Profile_placeholer.png';
import LatestAnswers from '../../components/profile/latestAnswers/LatestAnswers';
import LatestQuestions from '../../components/profile/latestQuestions/LatestQuestions';
import ProfileSetting from '../../components/modals/profileSetting/ProfileSetting';

function UserProfile() {
  const [latestSection, setLatestSection] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <section className="md:h-[30vh] mt-10 m-8 lg:min-h-[50vh] lg:mx-[0rem] lg:flex lg:justify-center">
        <div>
          <img
            className="w-[50rem] h-[8rem] object-fill rounded lg:h-[20rem] relative"
            src={coverPlaceholder}
            alt="cover"
          />
          <div className="mt-3">
            <img
              className="h-[4rem] w-[4rem] object-cover ml-5 rounded-full absolute border-[2px] border-white top-[11.3rem] lg:top-[21rem] lg:h-[7rem] lg:w-[7rem] lg:ml-[3rem]"
              src={userProfilePlaceholder}
              alt="profile"
            />
            <div className="flex flex-col justify-center items-center">
              <IoSettingsOutline
                onClick={() => setOpen(true)}
                className="place-self-end mr-3 text-cusOrange cursor-pointer"
              />
              <h1 className="mt-2 ">Username</h1>
              <h1 className="mt-2 ">Web Developer</h1>
            </div>
          </div>
        </div>
      </section>
      <ProfileSetting open={open} setOpen={setOpen} />

      <section className="text-sm md:h-[50vh] m-7 lg:min-h-[70vh] lg:text-base">
        <div className="flex justify-around items-center lg:justify-center lg:mr-7">
          <button
            className={`px-5 py-3 hover:scale-110 ease-in-out transition-all hover:text-cusOrange ${
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
            className={`px-5 py-3 hover:scale-110 ease-in-out transition-all hover:text-cusOrange ${
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