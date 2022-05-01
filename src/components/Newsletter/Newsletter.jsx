import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { useSelector } from 'react-redux';

function Newsletter() {
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Required!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Enter a proper email address...';
    }
    return error;
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address...').required('Required'),
  });

  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validator={() => ({})}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col justify-center items-center md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 grid-cols-1">
          <Field
            id="email"
            name="email"
            type="email"
            validate={validateEmail}
            placeholder="Your Email Address"
            className=" lg:w-[312px] h-auto text-base font-semibold transition ease-in-out outline outline-1 outline-secondary-color rounded-md text-font-color px-2 py-2 mb-3  text-center border-secondary-color
            focus:invalid:border-primary-color focus:border-2 focus:border-primary-color xs:w-[270px] xs-justify-center xs:justify-center xs:text-center xs:align-middle mx-auto"
          />
          {errors.email && touched.email ? (
            <div className="text-center mb-4">{errors.email}</div>
          ) : null}
          <a href="!#">
            <button
              type="submit"
              className={`lg:w-[468px] h-auto text-base border border-transparent font-semibold text-white  hover:bg-white rounded-md px-5 py-3 w-[auto] xs:justify-center xs:align-middle ${
                darkMode ? 'hover:text-cusOrange' : 'hover:text-primary-color'
              } ${
                darkMode ? 'hover:border-white' : 'hover:border-primary-color'
              } ${darkMode ? 'bg-cusOrange' : 'bg-primary-color'} ${
                darkMode ? 'border-white' : 'bg-primary-color'
              }`}
            >
              Submit
            </button>
          </a>
        </Form>
      )}
    </Formik>
  );
}

export default Newsletter;
