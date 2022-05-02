import PropTypes from 'prop-types';
import { FaSpinner, FaFileUpload } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import Dropzone from 'react-dropzone';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../Modal/Modal';
import { uploadPicCloudinary } from '../../../../redux/features/uploadPicCloudinarySlice';

function ProfilePicEdit({ open, setOpen, label }) {
  // eslint-disable-next-line no-unused-vars
  const [newProfilePic, setNewProfilePic] = useState('');
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  const dispatch = useDispatch();
  const userInfoSignedIn = useSelector((state) => state.signIn.user.userInfo);
  const userInfoSignedUp = useSelector(
    (state) => state.signIn.signUp.isSignedUp,
  );
  return (
    <Modal label={label} open={open} setOpen={setOpen}>
      <div className="lg:flex lg:flex-row-reverse lg:justify-end lg:w-screen  md:text-base text-sm">
        <section className="min-h-[20vh] scale-[.8] lg:min-h-[20vh] md:scale-100 flex flex-col justify-start items-center ml-2">
          <Formik
            initialValues={{}}
            onSubmit={(_, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                setOpen(false);
                if (!newProfilePic) return;
                dispatch(
                  uploadPicCloudinary({
                    files: newProfilePic,
                    id: userInfoSignedIn?.id || userInfoSignedUp?.id,
                    jwt: userInfoSignedIn?.token || userInfoSignedUp?.token,
                  }),
                );
                setNewProfilePic('');
              }, 1000);
            }}
          >
            {({
              // Unused props: handleSubmit, handleChange, handleBlur, values, isValid,

              isSubmitting,
            }) => (
              <Form className="flex flex-col w-[17rem] lg:w-[20rem]">
                <Dropzone
                  accept="image/*"
                  onDrop={() => {}}
                  maxFiles={4}
                  maxSize={4194304} // 4MB
                  onDropAccepted={(e) => setNewProfilePic(e)}
                >
                  {({ acceptedFiles, getRootProps, getInputProps }) => (
                    <section>
                      <div
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...getRootProps({
                          className:
                            'dropzone flex flex-col items-center bg-gray-50 rounded-lg outline-dashed outline-gray-200 px-4 py-5 my-2',
                        })}
                      >
                        <input
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...getInputProps()}
                          id="attachments"
                        />
                        <FaFileUpload className="w-5 h-5 text-gray-400 mb-3" />
                        <p className="text-sm text-gray-500 text-center">
                          Drag and drop images, or click to browse
                        </p>
                        {acceptedFiles.length ? (
                          <aside className="mt-4">
                            <h4 className="text-red-600">Files</h4>
                          </aside>
                        ) : null}
                      </div>
                    </section>
                  )}
                </Dropzone>

                {isSubmitting ? (
                  <button
                    type="submit"
                    className="text-lg mt-5 bg-cusOrange text-white rounded pl-10 pr-5 py-2 mb-10 lg:mb-0 relative border-[1px]"
                    disabled
                  >
                    <FaSpinner className="animate-spin h-5 text-white mr-[4rem] lg:mr-[6rem] absolute right-[7rem] top-[0.8rem]" />
                    Updating...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={`text-lg w-full text-gray-100 bg-cusOrange transition rounded px-8 py-2 mb-10 lg:mb-0   hover:bg-white border-[1px] ${
                      darkMode
                        ? 'hover:text-cusOrange'
                        : 'hover:text-primary-color'
                    } ${
                      darkMode
                        ? 'hover:border-white'
                        : 'hover:border-primary-color'
                    } ${darkMode ? 'bg-cusOrange' : 'bg-primary-color'} ${
                      darkMode ? 'border-white' : 'border-primary-color'
                    }`}
                  >
                    Update
                  </button>
                )}
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </Modal>
  );
}

ProfilePicEdit.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default ProfilePicEdit;
