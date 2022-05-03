import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import AddQuestion from '../modals/AddQuestion/AddQuestion';

function CheckContent({ label }) {
  const [open, setOpen] = useState(false);
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);

  return (
    <div className="relative max-w-3xl mx-auto">
      <div
        className={`mx-auto my-8 max-w-3xl px-6 pt-4 pb-6 rounded-md ${
          darkMode ? 'bg-secondaryDark' : 'bg-[#F0F0F0]'
        } ${darkMode ? 'text-white' : 'text-black'}`}
      >
        <h3 className="text-2xl mb-5 flex flex-col items-center">
          <span className="text-[#CA7560] ">{label}</span>
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className={`w-fit text-sm mt-10 text-gray-100 bg-cusOrange transition rounded px-8 py-2 mb-10 lg:mb-0 whitespace-nowrap text-center hover:bg-white border-[1px] ${
              darkMode ? 'hover:text-cusOrange' : 'hover:text-primary-color'
            } ${
              darkMode ? 'hover:border-white' : 'hover:border-primary-color'
            } ${darkMode ? 'bg-cusOrange' : 'bg-primary-color'} ${
              darkMode ? 'border-white' : 'border-primary-color'
            }`}
          >
            Add question?
          </button>
        </h3>
        <AddQuestion open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
CheckContent.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CheckContent;
