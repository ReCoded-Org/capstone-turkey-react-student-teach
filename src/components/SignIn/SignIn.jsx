import { Fragment, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';

import FormField from '../FormField/FormField';

const SignInSchema = Yup.object().shape({
  username: Yup.string().min(3).max(24).required(),
  password: Yup.string().min(8).max(32).required(),
});

function SignIn({ open, setOpen }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-60 transition-opacity backdrop-blur" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
              <div className="bg-white p-4 sm:p-6 sm:pb-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-4xl font-bold">Sign In</h2>
                  <button
                    type="button"
                    className="rounded-full cursor-pointer hover:bg-gray-200"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    <svg
                      className="w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </button>
                </div>
                <Formik
                  initialValues={{
                    username: '',
                    password: '',
                  }}
                  validationSchema={SignInSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      console.log(values);
                      setSubmitting(false);
                    }, 1000);
                  }}
                >
                  {({
                    // handleSubmit,
                    // handleChange,
                    // handleBlur,
                    // values,
                    touched,
                    // isValid,
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
                          // Submitting
                          <button
                            type="submit"
                            className="text-lg bg-red-700 text-gray-200 rounded flex items-center px-5 py-2"
                            disabled
                          >
                            <FaSpinner className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                            Signing in...
                          </button>
                        ) : (
                          // Idle
                          <button
                            type="submit"
                            className="text-lg text-gray-100 bg-red-600 hover:bg-red-700 transition rounded px-5 py-2"
                          >
                            Sign in
                          </button>
                        )}
                        <Link
                          to="/reset-password"
                          className="text-red-600 hover:text-red-700 transition"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
SignIn.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default SignIn;
