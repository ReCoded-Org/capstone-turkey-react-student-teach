import React from 'react';
import { Formik, Field, Form } from 'formik';

export default function Newsletter() {
  return (
    <Formik
      initialValues={{
        email: ''
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 0))
      }}
    >
      <Form className="block flex-col justify-items-center align-middle content-center md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        <Field
          id="email"
          name="email"
          type="email"
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
      </Form>
    </Formik>
  )
}