import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';

import Modal from '../Modal/Modal';
import FormField from '../../FormField/FormField';
import { signUp } from '../../../redux/features/userSlice';

const SignInSchema = Yup.object().shape({
  username: Yup.string().min(3).max(24).required(),
  userlastname: Yup.string().min(3).max(24).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
  passwordConfimation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords does not match')
    .required(),
});

function SignUp({ open, setOpen, setSignIn }) {
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.signIn.signUp.isSignedUp.error);
  const isUser = useSelector(
    (state) => state.signIn.signUp.isSignedUp.firstName,
  );
  const isLoading = useSelector((state) => state.signIn.signUp.status);
  const [showWrongMessage, setShowWrongMessage] = useState(false);

  useEffect(() => {
    if (isLoading === 'success' && isError) {
      setShowWrongMessage(true);
    }
    // hide wrong email response
    const timeout = setTimeout(() => {
      setShowWrongMessage(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isLoading, isError]);

  return (
    <Modal className="z-99" label="Sign up" open={open} setOpen={setOpen}>
      <Formik
        initialValues={{
          username: '',
          userlastname: '',
          email: '',
          password: '',
          passwordConfimation: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(
            signUp({
              firstName: values.username,
              lastName: values.userlastname,
              email: values.email,
              password: values.password,
            }),
          );
          if (isUser) {
            const timeout = setTimeout(() => {
              setSubmitting(false);
            }, 3000);
            clearTimeout(timeout, 3500);
          }
        }}
      >
        {({
          // Unused props: handleSubmit, handleChange, handleBlur, values, isValid,
          touched,
          errors,
        }) => (
          <Form>
            <FormField
              autoComplete="username"
              className="mb-3"
              errors={errors}
              label="First Name"
              name="username"
              touched={touched}
              type="text"
            />
            <FormField
              autoComplete="userlastname"
              className="mb-3"
              errors={errors}
              label="Last Name"
              name="userlastname"
              touched={touched}
              type="text"
            />
            <FormField
              autoComplete="email"
              className="mb-3"
              errors={errors}
              label="Email Address"
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
              {isLoading === 'loading' ? (
                <button
                  type="submit"
                  className="text-lg bg-cusOrange text-gray-200 rounded flex items-center px-5 py-2"
                  disabled
                >
                  <FaSpinner className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Signing up...
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-lg text-gray-100 bg-cusOrange hover:scale-110 ease-in-out transition-all rounded px-5 py-2"
                >
                  Sign up
                </button>
              )}
              <p className="text-right text-xs text-gray-500 mb-0">
                Already have an account?
                <br />
                <button
                  type="button"
                  className="text-sm text-cusOrange hover:scale-110 transition"
                  onClick={() => {
                    setOpen(false);
                    setSignIn(true);
                  }}
                >
                  Sign in
                </button>
              </p>
            </div>
            <p className="text-red-400 text-sm mt-2 text-center">
              {showWrongMessage && isError}
            </p>
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
