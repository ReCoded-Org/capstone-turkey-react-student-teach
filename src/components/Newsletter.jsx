import React from 'react';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const Newsletter = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form 
        className='block flex-col justify-items-center align-middle content-center md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1'
        onSubmit={formik.handleSubmit}
      >
        <input
          id="email"
          name="email"
          type="email"
          value={formik.values.value}
          onChange={formik.handleChange}
          placeholder="Your Email Address"
          className="block w-[312px] h-auto text-base font-semibold transition ease-in-out outline outline-1 outline-secondary-color rounded-md text-font-color px-2 py-2 mb-3 text-center justify-center border-secondary-color"
        />

        <a href="#" className="inline-flex items-center justify-center w-[468px]">
          <button
            type="submit"
            className="block w-[468px] h-auto text-base border border-transparent font-semibold text-white bg-primary-color hover:bg-white hover:text-primary-color hover:border-primary-color rounded-md px-5 py-3">
              Submit
          </button>
        </a>

      </form>
    </>
  )
}

export default Newsletter