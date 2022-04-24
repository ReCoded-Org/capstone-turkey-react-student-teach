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
    <Modal label="Ask your question" open={open} setOpen={setOpen}>
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
          <Form className="min-h-[40vh] scale-90 lg:scale-100">
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
                  className="text-lg w-full bg-cusOrange text-white rounded pl-10 pr-5 py-2 mb-10 lg:mb-0 relative"
                  disabled
                >
                  <FaSpinner className="animate-spin h-5 text-white mr-[4rem] lg:mr-[6rem] absolute right-[7rem] top-[0.8rem]" />
                  Updating...
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-lg w-full text-gray-100 bg-cusOrange transition rounded px-8 py-2 mb-10 lg:mb-0 hover:scale-110 ease-in-out"
                >
                  Submit
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
