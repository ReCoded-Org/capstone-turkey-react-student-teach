/* eslint-disable jsx-a11y/label-has-associated-control */

import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Dropzone from 'react-dropzone';
import { FaFileUpload, FaSpinner } from 'react-icons/fa';
import prettyBytes from 'pretty-bytes';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import FormField from '../../FormField/FormField';

const SignInSchema = Yup.object().shape({
  title: Yup.string().min(3).max(24).required(),
  question: Yup.string().email().required(),
});

function AddQuestion({ open, setOpen }) {
  const [newPic, setNewPic] = useState('');
  return (
    <Modal label="Ask question" open={open} setOpen={setOpen}>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // console.log(values);
            console.log(newPic);
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
            <label
              htmlFor="attachments"
              className="block text-sm font-medium text-gray-700"
            >
              Attachments
            </label>
            <Dropzone
              accept="image/*"
              onDrop={() => {}}
              maxFiles={4}
              maxSize={4194304} // 4MB
            >
              {({ acceptedFiles, getRootProps, getInputProps }) => (
                <section>
                  <div
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...getRootProps({
                      className:
                        'dropzone flex flex-col items-center bg-gray-50 rounded-lg outline-dashed outline-gray-200 px-4 py-5 my-2',
                    })}
                  >
                    <input
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...getInputProps()}
                      id="attachments"
                    />
                    <FaFileUpload className="w-9 h-9 text-gray-400 mb-3" />
                    <p className="text-sm text-gray-500 text-center">
                      Drag and drop images, or click to browse
                    </p>
                    {acceptedFiles.length ? (
                      <aside className="mt-4">
                        <h4 className="text-red-600">Files</h4>
                        <ul className="list-disc text-sm">
                          {acceptedFiles.map((file) => {
                            const reader = new FileReader();
                            reader.onload = () => {
                              setNewPic(reader.result);
                            };
                            reader.readAsDataURL(file);

                            return (
                              <li key={file.path} className="ml-4">
                                {file.path} - {prettyBytes(file.size)}
                              </li>
                            );
                          })}
                        </ul>
                      </aside>
                    ) : null}
                  </div>
                </section>
              )}
            </Dropzone>
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
