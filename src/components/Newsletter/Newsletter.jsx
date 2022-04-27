import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';

function Newsletter() {
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
        <Form className="flex flex-col justify-self-center md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 grid-cols-1">
          <Field
            id="email"
            name="email"
            type="email"
            validate={validateEmail}
            placeholder="Your Email Address"
            className=" w-[275px] mx-0 h-auto text-base font-semibold transition ease-in-out outline outline-1 outline-secondary-color rounded-md text-font-color px-2 py-2 mb-3  text-center border-secondary-color
            focus:invalid:border-primary-color focus:border-2 focus:border-primary-color  xs-justify-center "
          />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <a href="!#" className="text-center">
            <button
              type="submit"
              className="w-[275px] lg:w-full  border border-transparent font-semibold text-white bg-primary-color hover:bg-white hover:text-primary-color hover:border-primary-color rounded-md px-5 py-3 "
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
