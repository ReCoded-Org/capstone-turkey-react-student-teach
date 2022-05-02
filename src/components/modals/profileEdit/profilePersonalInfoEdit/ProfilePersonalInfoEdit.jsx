import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import FormField from '../../../FormField/FormField';
import Modal from '../../Modal/Modal';
import { editProfile } from '../../../../redux/features/editProfileSlice';

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().min(2).max(10),
  lastName: Yup.string().min(2).max(10),
  email: Yup.string().email(),
});
function ProfileSetting({ open, setOpen }) {
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);
  const [status, setStatus] = useState([]);
  const dispatch = useDispatch();
  const userInfoSignedIn = useSelector((state) => state.signIn.user.userInfo);
  const userInfoSignedUp = useSelector(
    (state) => state.signIn.signUp.isSignedUp,
  );
  const editProfileStatus = useSelector(
    (state) => state.editProfileReducer.message,
  );

  useEffect(() => {
    let cancel = true;
    if (cancel) {
      setStatus(editProfileStatus[editProfileStatus.length - 1]);
    }
    const timer = setTimeout(() => {
      return setStatus([]);
    }, 3000);

    return () => {
      cancel = false;
      clearTimeout(timer);
    };
  }, [editProfileStatus]);

  return (
    <Modal label="Update information" open={open} setOpen={setOpen}>
      <div className="lg:flex lg:flex-row-reverse lg:justify-end lg:w-screen  md:text-base text-sm scale-90 lg:scale-100 lg:ml-2 min-w-[70vw] lg:min-w-[20vw]">
        <section className="min-h-[35vh] flex flex-col justify-start items-center">
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              dispatch(
                editProfile({
                  editFirstName:
                    values.firstName.length !== 0
                      ? values.firstName
                      : userInfoSignedIn?.firstName ||
                        userInfoSignedUp?.firstName,
                  editLastName:
                    values.lastName.length !== 0
                      ? values.lastName
                      : userInfoSignedIn?.lastName ||
                        userInfoSignedUp?.lastName,
                  editEmail:
                    values.email.length !== 0
                      ? values.email
                      : userInfoSignedIn?.email || userInfoSignedUp?.email,
                  pic: userInfoSignedIn?.avatar || userInfoSignedUp?.avatar,
                  id: userInfoSignedIn?.id || userInfoSignedUp?.id,
                  jwt: userInfoSignedIn?.token || userInfoSignedUp?.token,
                }),
              );
              setTimeout(() => {
                setSubmitting(false);
                setOpen(false);
                resetForm();
              }, 1500);
            }}
          >
            {({
              // Unused props: handleSubmit, handleChange, handleBlur, values, isValid,
              touched,
              errors,
              isSubmitting,
            }) => (
              <Form className="min-w-[17rem] lg:min-w-[20rem]">
                <FormField
                  autoComplete="firstName"
                  className="mb-2"
                  errors={errors}
                  label="First Name"
                  name="firstName"
                  touched={touched}
                  type="text"
                  placeholder="Your first name"
                />
                <FormField
                  autoComplete="lastName"
                  className="mb-2"
                  errors={errors}
                  label="Last Name"
                  name="lastName"
                  touched={touched}
                  type="text"
                  placeholder="Your last name"
                />

                <FormField
                  autoComplete="email"
                  className="mb-2"
                  errors={errors}
                  label="Email"
                  name="email"
                  touched={touched}
                  type="email"
                  placeholder="You@company.com"
                />
                {status?.message ? (
                  <h1 className="text-center text-green-500">
                    Updated Successfuly
                  </h1>
                ) : (
                  ''
                )}

                {status?.error ? (
                  <h1 className="text-center text-red-500">Failed to update</h1>
                ) : (
                  ''
                )}
                <div className="w-full mt-5">
                  {isSubmitting ? (
                    <button
                      type="submit"
                      className="text-lg bg-cusOrange text-white rounded pl-10 pr-5 py-2 mb-10 lg:mb-0 relative w-full border-[1px]"
                      disabled
                    >
                      <FaSpinner className="animate-spin h-5 text-white mr-[4rem] lg:mr-[6rem] absolute right-[7rem] top-[0.8rem] " />
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
                </div>
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
