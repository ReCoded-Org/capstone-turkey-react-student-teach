import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import NotFoundLogo from '../../assets/404/NotFoundLogo';

function NotFoundPage() {
  return (
    <div className="h-[93.5vh] mt-2 flex flex-col justify-center items-center">
      <div className="bg-cusOrange min-h-[50vh] w-[70vw] lg:min-h-[35vh] lg:min-w-[40vw] lg:max-w-[55vw] rounded-md mt-10 lg:mt-0">
        <div className="m-10">
          <div className="lg:flex lg:justify-between">
            <div>
              <h1 className="text-2xl text-center lg:text-left lg:text-5xl font-semibold text-white mb-10">
                Page Not Found
              </h1>
              <h2 className="text-lg hidden lg:block">
                Looks like you have followed a broken link or entered URL that{' '}
                <br />
                doesnt belong to this site.
              </h2>
              <h2 className="text-md text-center block lg:hidden">
                You entered a URL that doesnt belong to this site.
              </h2>
            </div>
            <div className="hidden lg:block">
              <NotFoundLogo />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center lg:flex lg:flex-row lg:justify-end lg:items-center mt-10">
            <h1 className="mt-5 text-md text-white lg:mr-5">
              You will be redirected in
            </h1>
            <div className="mt-5">
              <CountdownCircleTimer
                isPlaying
                duration={5}
                rotation="counterclockwise"
                colors="#FFFFFF"
                colorsTime={[7, 5, 2, 0]}
                size={100}
                trailColor="#CA7560"
              >
                {({ remainingTime }) => remainingTime}
              </CountdownCircleTimer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
