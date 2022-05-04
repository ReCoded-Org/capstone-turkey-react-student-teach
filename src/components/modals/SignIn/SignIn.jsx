import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import FormField from '../../FormField/FormField';
import { login } from '../../../redux/features/userSlice';

const SignInSchema = Yup.object().shape({
  username: Yup.string().min(3).max(24).required(),
  password: Yup.string().min(8).max(32).required(),
});

function SignIn({ open, setOpen, setSignUp }) {
  const dispatch = useDispatch();
  const isSuccess = useSelector((state) => state.signIn.user.status);
  const error = useSelector((state) => state.signIn.user.userInfo.error);
  const [showMessage, setShowMessage] = useState(false);
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);

  useEffect(() => {
    if (error || isSuccess === 'success') {
      setShowMessage(true);
    }
    // hide wrong email response
    const timeout = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [error, isSuccess]);

  return (
    <Modal className="z-99" label="Sign in" open={open} setOpen={setOpen}>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(
            login({
              email: values.username,
              password: values.password,
            }),
          );
          if (isSuccess === 'success') {
            const timeout = setTimeout(() => {
              setSubmitting(false);
              setShowMessage(false);
            }, 2000);
            clearTimeout(timeout, 2500);
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
              {isSuccess === 'loading' ? (
                <button
                  type="submit"
                  className="text-lg bg-cusOrange text-gray-200 rounded flex items-center px-5 py-2 border-[1px]"
                  disabled
                >
                  <FaSpinner className="animate-spin -ml-1 mr-3 h-5 w-5 " />
                  Signing in...
                </button>
              ) : (
                <button
                  type="submit"
                  className={`text-lg w-[50wh] text-gray-100 bg-cusOrange transition rounded px-8 py-2 mb-10 lg:mb-0   hover:bg-white border-[1px] ${
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
                  Sign in
                </button>
              )}
              <p className="text-right text-xs text-gray-500 mb-0">
                Don&apos;t have an account yet?
                <br />
                <button
                  type="button"
                  className="text-sm text-cusOrange"
                  onClick={() => {
                    setOpen(false);
                    setSignUp(true);
                  }}
                >
                  Sign up
                </button>
              </p>
            </div>
            {showMessage && (
              <p className="red text-sm text-red-400 block text-center mt-2">
                {error}
              </p>
            )}
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
