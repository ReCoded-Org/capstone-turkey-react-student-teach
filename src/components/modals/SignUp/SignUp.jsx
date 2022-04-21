import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';

import Modal from '../Modal/Modal';
import FormField from '../../FormField/FormField';

const SignInSchema = Yup.object().shape({
  username: Yup.string().min(3).max(24).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
  passwordConfimation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords does not match')
    .required(),
});

function SignUp({ open, setOpen, setSignIn }) {
  return (
    <Modal className="z-99" label="Sign up" open={open} setOpen={setOpen}>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({
          // Unused props: handleSubmit, handleChange, handleBlur, values, isValid,
          touched,
          errors,
          isSubmitting,
        }) => (
          <Form>
            <FormField
              autoComplete="username"
              className="mb-3"
              errors={errors}
              label="Username"
              name="username"
              touched={touched}
              type="text"
            />
            <FormField
              autoComplete="email"
              className="mb-3"
              errors={errors}
              label="Email address"
              name="email"
              touched={touched}
              type="email"
            />
            <FormField
              autoComplete="new-password"
              className="mb-3"
              errors={errors}
              label="Password"
              name="password"
              touched={touched}
              type="password"
            />
            <FormField
              autoComplete="new-password"
              className="mb-3"
              errors={errors}
              label="Repeat password"
              name="passwordConfimation"
              touched={touched}
              type="password"
            />
            <div className="flex justify-between items-center mt-7">
              {isSubmitting ? (
                <button
                  type="submit"
                  className="text-lg bg-red-700 text-gray-200 rounded flex items-center px-5 py-2"
                  disabled
                >
                  <FaSpinner className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Signing up...
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-lg text-gray-100 bg-red-600 hover:bg-red-700 transition rounded px-5 py-2"
                >
                  Sign up
                </button>
              )}
              <p className="text-right text-xs text-gray-500 mb-0">
                Already have an account?
                <br />
                <button
                  type="button"
                  className="text-sm text-red-600 hover:text-red-700 transition"
                  onClick={() => {
                    setOpen(false);
                    setSignIn(true);
                  }}
                >
                  Sign in
                </button>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
SignUp.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setSignIn: PropTypes.func.isRequired,
};

export default SignUp;
