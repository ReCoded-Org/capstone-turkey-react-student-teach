import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';

import Modal from '../Modal/Modal';
import FormField from '../FormField/FormField';

const SignInSchema = Yup.object().shape({
  title: Yup.string().min(3).max(24).required(),
  question: Yup.string().email().required(),
  attachment: Yup.string().min(8).max(32).required(),
});

function AddQuestion({ open, setOpen }) {
  return (
    <Modal label="Ask question" maxWidth="md" open={open} setOpen={setOpen}>
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
          // Unused props: handleSubmit, handleChange, handleBlur, values, isValid,
          touched,
          errors,
          isSubmitting,
        }) => (
          <Form>
            <FormField
              className="mb-3"
              errors={errors}
              label="Title"
              name="title"
              touched={touched}
              type="text"
            />
            <FormField
              autoComplete="email"
              className="mb-3"
              errors={errors}
              label="Question"
              name="question"
              touched={touched}
              type="textarea"
            />
            <div className="flex justify-between items-center mt-7">
              {isSubmitting ? (
                <button
                  type="submit"
                  className="text-lg bg-red-700 text-gray-200 rounded flex items-center px-5 py-2"
                  disabled
                >
                  <FaSpinner className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Publishing...
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-lg text-gray-100 bg-red-600 hover:bg-red-700 transition rounded px-5 py-2"
                >
                  Publish
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
AddQuestion.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default AddQuestion;
