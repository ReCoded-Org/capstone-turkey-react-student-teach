import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { FaEllipsisV, FaReply, FaSpinner } from 'react-icons/fa';
import { addComment } from '../../redux/features/addCommentSlice';

const ReplySchema = Yup.object().shape({
  content: Yup.string().min(3).required(),
});

function Question({ status, question }) {
  const [open, setOpen] = useState(false);
  const sideMenuRef = useRef();
  const ellipsisIconRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkIfClickedOutsideOfSideMenu = (e) => {
      if (
        open &&
        !sideMenuRef.current.contains(e.target) &&
        !ellipsisIconRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutsideOfSideMenu);
    return () => {
      document.removeEventListener(
        'mousedown',
        checkIfClickedOutsideOfSideMenu,
      );
    };
  }, [open]);

  return (
    <div className=" relative max-w-3xl mx-auto">
      <div className=" mx-auto my-8 max-w-3xl px-6 pt-4 pb-6 bg-[#F0F0F0]">
        <div className="flex mb-5">
          {status === 'loading' ? (
            <div />
          ) : (
            <img
              src={
                question.student?.avatar
                  ? question.student.avatar
                  : '/images/avatar.jpg'
              }
              className="w-10 h-10 rounded-full"
              alt="user.png"
            />
          )}

          {status === 'loading' ? (
            <div />
          ) : (
            <>
              <p className="pl-2 font-semibold self-center text-sm mr-auto">
                {question.student?.name
                  ? question.student.name
                  : "Student's Name"}
              </p>
              <div
                ref={ellipsisIconRef}
                className="text-xl self-center cursor-pointer"
              >
                <FaEllipsisV onClick={() => setOpen(!open)} />
              </div>
              <div
                ref={sideMenuRef}
                className={`absolute -right-0 top-12 lg:-right-48 lg:top-0 z-10 w-44 rounded-lg shadow-lg  border-[#CA7560] border-[4px]  border-opacity-50 bg-white transition  py-1 lg:py-3 ${
                  open ? 'show opacity-100' : 'hidden opacity-0'
                }`}
                id="dropdown"
              >
                <button
                  className=" w-full lg:w-full text-sm text-left text-gray-800 hover:text-gray-900 hover:bg-gray-200 transition px-2 lg:px-4 py-1"
                  type="button"
                >
                  Edit Question
                </button>
                <button
                  className="w-full lg:w-full text-sm text-left hover:bg-gray-200 transition px-2 lg:px-4 py-1"
                  type="button"
                >
                  Add to Bookmark
                </button>
                <button
                  className="w-full lg:w-full text-sm text-left  hover:bg-gray-200 transition px-2 lg:px-4 py-1"
                  type="button"
                >
                  Share
                </button>
                <button
                  className="w-full lg:w-full text-sm text-left text-red-600 hover:text-red-700 hover:bg-gray-200 transition px-2 lg:px-4 py-1"
                  type="button"
                >
                  Delete Question
                </button>
              </div>
            </>
          )}
        </div>

        <h3 className="text-2xl mb-5">
          <span className="text-[#CA7560] ">Q</span>: {question?.title}
        </h3>
        <p className="text-sm mb-7 pl-7 ">{question?.content}</p>
      </div>

      <div className="relative w-full px-2 lg:px-20 ">
        <Formik
          initialValues={{
            title: '',
            question: '',
          }}
          validationSchema={ReplySchema}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(
              addComment({
                questionID: question.id,
                creatorID: question.student.id, // Change this after merging with userslices
              }),
            );
            setTimeout(() => {
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="flex flex-row items-end">
                <div className="w-full">
                  <Field
                    as="textarea"
                    className="my-1 focus:ring-cusOrange focus:border-cusOrange block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    name="replyToQuestion"
                    rows={2}
                    placeholder="Answer the question"
                  />
                  <ErrorMessage
                    className="text-sm text-red-600"
                    component="div"
                    name="replyToQuestion"
                  />
                </div>
                <button
                  type="submit"
                  className="text-gray-100 bg-orange rounded px-5 py-2 ml-2 my-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <FaSpinner className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  ) : (
                    <FaReply />
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
Question.propTypes = {
  status: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  question: PropTypes.any,
};
Question.defaultProps = {
  status: '',
  question: null,
};

export default Question;
