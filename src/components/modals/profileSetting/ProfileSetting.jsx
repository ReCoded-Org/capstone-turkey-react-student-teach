import PropTypes from 'prop-types';
import { FaSpinner, FaFileUpload } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Dropzone from 'react-dropzone';
import { useState } from 'react';
import FormField from '../../FormField/FormField';
import Modal from '../Modal/Modal';

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().min(2).max(10),
  lastName: Yup.string().min(2).max(10),
  title: Yup.string().min(2).max(24),
});
function ProfileSetting({ open, setOpen }) {
  // eslint-disable-next-line no-unused-vars
  const [newProfilePic, setProfilePic] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [newCoverPic, setCoverPic] = useState('');

  return (
    <Modal label="" open={open} setOpen={setOpen}>
      <div className="lg:flex lg:flex-row-reverse lg:justify-end lg:w-screen  md:text-base text-sm">
        <section className="h-3/4 mt-10 md:mt-[4rem] md:h-[70vh] flex flex-col justify-start items-center">
          <h1 className="mb-10 w-max font-semibold text-[1.2rem] md:text-2xl lg:text-[1.5rem] lg:mb-[3.5]">
            Update your information
          </h1>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              title: '',
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                setSubmitting(false);
                setOpen(false);
                resetForm();
              }, 1000);
            }}
          >
            {({
              // Unused props: handleSubmit, handleChange, handleBlur, values, isValid,
              touched,
              errors,
              isSubmitting,
            }) => (
              <Form className="flex flex-col w-[15rem] lg:w-[20rem]">
                <FormField
                  autoComplete="firstName"
                  className="mb-2 lg:text-left"
                  errors={errors}
                  label="First Name"
                  name="firstName"
                  touched={touched}
                  type="text"
                  placeholder="Your Name"
                />
                <FormField
                  autoComplete="lastName"
                  className="mb-2 lg:text-left"
                  errors={errors}
                  label="Last Name"
                  name="lastName"
                  touched={touched}
                  type="text"
                  placeholder="You@company.com"
                />

                <FormField
                  autoComplete="title"
                  className="mb-2 lg:text-left"
                  errors={errors}
                  label="Title"
                  name="title"
                  touched={touched}
                  type="text"
                  placeholder="Your Title"
                />
                <h1 className="shadow-sm text-sm border-gray-300 rounded-md">
                  Upload profile image
                </h1>
                <Dropzone
                  accept="image/*"
                  onDrop={() => {}}
                  maxFiles={4}
                  maxSize={4194304} // 4MB
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
                            <ul className="list-disc text-sm">
                              {acceptedFiles.map((file) => {
                                const reader = new FileReader();
                                reader.onload = () => {
                                  setProfilePic(reader.result);
                                };
                                return reader.readAsDataURL(file);
                              })}
                            </ul>
                          </aside>
                        ) : null}
                      </div>
                    </section>
                  )}
                </Dropzone>
                <h1 className="shadow-sm text-sm border-gray-300 rounded-md">
                  Upload cover image
                </h1>
                <Dropzone
                  accept="image/*"
                  onDrop={() => {}}
                  maxFiles={4}
                  maxSize={4194304} // 4MB
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
                            <ul className="list-disc text-sm">
                              {acceptedFiles.map((file) => {
                                const reader = new FileReader();
                                reader.onload = () => {
                                  setCoverPic(reader.result);
                                };
                                return reader.readAsDataURL(file);
                              })}
                            </ul>
                          </aside>
                        ) : null}
                      </div>
                    </section>
                  )}
                </Dropzone>

                {isSubmitting ? (
                  <button
                    type="submit"
                    className="text-lg bg-cusOrange text-white rounded pl-10 pr-5 py-2 mb-10 lg:mb-0 relative"
                    disabled
                  >
                    <FaSpinner className="animate-spin h-5 text-white mr-[4rem] lg:mr-[6rem] absolute right-[7rem] top-[0.8rem]" />
                    Updating...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="text-lg text-gray-100 bg-cusOrange transition rounded px-8 py-2 mb-10 lg:mb-0 hover:scale-110 ease-in-out"
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

ProfileSetting.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default ProfileSetting;
