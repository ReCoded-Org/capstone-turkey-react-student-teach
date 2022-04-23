/* eslint-disable jsx-a11y/label-has-associated-control */

import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FaSpinner } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import Modal from '../Modal/Modal';
import FormField from '../../FormField/FormField';
import { addQuestion } from '../../../redux/features/addQuestionSlice';

const SignInSchema = Yup.object().shape({
  title: Yup.string().min(3).max(24).required(),
  question: Yup.string().required(),
  subject: Yup.string().min(3).max(24).required(),
});

function AddQuestion({ open, setOpen }) {
  const dispatch = useDispatch();
  return (
    <Modal label="Ask question" open={open} setOpen={setOpen}>
      <Formik
        initialValues={{
          title: '',
          question: '',
          subject: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            dispatch(
              addQuestion({
                questionTitle: values.title,
                questionContnet: values.question,
                subject: values.subject,
              }),
            );
            setSubmitting(false);
            resetForm();
            setOpen(false);
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
              placeholder="Question title"
            />

            <FormField
              className="mb-3"
              errors={errors}
              label="Subject"
              name="subject"
              touched={touched}
              type="text"
              placeholder="What is the subject of your question? e.g Math "
            />
            <FormField
              className="mb-3"
              errors={errors}
              label="Question"
              name="question"
              touched={touched}
              type="textarea"
              placeholder="Question content"
            />

            <div className="flex justify-between items-center mt-7">
              {isSubmitting ? (
                <button
                  type="submit"
                  className="text-lg bg-cusOrange text-gray-200 rounded flex items-center px-5 py-2"
                  disabled
                >
                  <FaSpinner className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Publishing...
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-lg text-gray-100 bg-cusOrange hover:scale-110 ease-in-out transition-all rounded px-5 py-2"
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
