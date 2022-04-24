import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import FormField from '../../../FormField/FormField';
import Modal from '../../Modal/Modal';
import { editProfile } from '../../../../redux/features/editProfileSlice';

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().min(2).max(10).required(),
  lastName: Yup.string().min(2).max(10).required(),
  title: Yup.string().min(2).max(24),
});
function ProfileSetting({ open, setOpen }) {
  const dispatch = useDispatch();

  return (
    <Modal label="Update information" open={open} setOpen={setOpen}>
      <div className="lg:flex lg:flex-row-reverse lg:justify-end lg:w-screen  md:text-base text-sm scale-90 lg:scale-100 ml-2">
        <section className="h-3/4 md:min-h-[70vh] lg:min-h-[40vh] flex flex-col justify-start items-center">
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              title: '',
              email: '',
            }}
            validationSchema={ContactSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                dispatch(
                  editProfile({
                    editFirstName: values.firstName,
                    editLastName: values.lastName,
                    editTitle: values.title,
                    editEmail: values.email,
                  }),
                );
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

                <FormField
                  autoComplete="email"
                  className="mb-2 lg:text-left"
                  errors={errors}
                  label="Email"
                  name="email"
                  touched={touched}
                  type="email"
                  placeholder="Your Email"
                />

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
