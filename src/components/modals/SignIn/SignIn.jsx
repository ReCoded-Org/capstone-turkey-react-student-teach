import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';

import Modal from '../Modal/Modal';
import FormField from '../../FormField/FormField';
import { login } from '../../../redux/features/userSlice';

const SignInSchema = Yup.object().shape({
  username: Yup.string().min(3).max(24).required(),
  password: Yup.string().min(8).max(32).required(),
});

function SignIn({ open, setOpen, setSignUp }) {
  const dispatch = useDispatch();

  return (
    <Modal className="z-99" label="Sign in" open={open} setOpen={setOpen}>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            dispatch(
              login({
                email: values.username,
                password: values.password,
              }),
            );
            setSubmitting(false);
          }, 1500);
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
              label="Email"
              name="username"
              touched={touched}
              type="text"
            />
            <FormField
              autoComplete="password"
              className="mb-3"
              errors={errors}
              label="Password"
              name="password"
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
                  Signing in...
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-lg text-gray-100 bg-red-600 hover:bg-red-700 transition rounded px-5 py-2"
                >
                  Sign in
                </button>
              )}
              <p className="text-right text-xs text-gray-500 mb-0">
                Don&apos;t have an account yet?
                <br />
                <button
                  type="button"
                  className="text-sm text-red-600 hover:text-red-700 transition"
                  onClick={() => {
                    setOpen(false);
                    setSignUp(true);
                  }}
                >
                  Sign up
                </button>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
SignIn.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setSignUp: PropTypes.func.isRequired,
};

export default SignIn;
