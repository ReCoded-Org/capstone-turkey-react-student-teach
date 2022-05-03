import { useSelector } from 'react-redux';
import creators from './creators';
import UserCard from '../../components/cards/aboutCard/AboutCard';
import about from '../../assets/images/about.png';

function About() {
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  return (
    <div
      className={`${darkMode ? 'bg-primaryDark ' : 'bg-white'} ${
        darkMode ? 'text-white ' : 'text-black'
      } pb-10 lg:pb-[5rem]`}
    >
      <div className="max-w-6xl container mx-auto px-2 md:px-2 lg:px-2 grid items-center pt-14 ">
        <div className="flex flex-col lg:flex-row items-center justify-center pb-10">
          <div className="flex flex-col text-center lg:text-left pb-10 lg:mb-0">
            <h2 className="text-2xl font-color-primary-color items-baseline text-primary-color font-bold mb-4">
              Who Are We
            </h2>
            <p className="leading-relaxed lg:text-xl">
              We are a group of 5 people who gathered to develop our`skills
              through React.js. There are some students, working proffesionals
              and also people who are looking for their new journeys through
              React.js in the group, however, aim is always to master at
              React.js. Different skills and backgrounds yielded Studenteach. A
              lot of time is spent to launch it. We also sharpened our soft
              skills of communication and collaboration beside developing our
              coding skills. Finally, Studenteach is out.
            </p>
          </div>
          <img
            src={about}
            alt="hands reaching each other"
            className="self-center lg:w-[500px] lg:h-[300px] md:w-[300px] md:h-[200px] lg:ml-[4rem]"
          />
        </div>
        <h2 className="font-medium text-2xl md:text-3xl lg:text-4xl mb-4 font-heading text-cusOrange text-center">
          Team
        </h2>

        <hr
          style={{
            color: 'var(--primary-color)',
            height: 12,
          }}
        />

        <div className="grid sm:grid-cols-2 sm:gap-12 md:grid-cols-2 md:gap-12 mx-auto lg:grid-cols-3 lg:gap-12 xl:gap-18">
          {creators.map((creator) => (
            <UserCard
              key={creator.id}
              name={creator.name}
              title={creator.title}
              email={creator.email}
              photo={creator.photo}
              github={creator.contact.github}
              linkedin={creator.contact.linkedin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
