import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarker,
  FaPhoneAlt,
  FaMediumM,
  FaSpinner,
} from 'react-icons/fa';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormField from '../../components/FormField/FormField';

const SignInSchema = Yup.object().shape({
  username: Yup.string().min(3).max(24).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(32).required(),
  passwordConfimation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords does not match')
    .required(),
});
function Contact() {
  return (
    <div className="lg:flex lg:flex-row-reverse lg:justify-end lg:h-screen">
      <section>
        <Formik
          initialValues={{
            name: '',
            password: '',
          }}
          validationSchema={SignInSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values, 'aa');
              setSubmitting(false);
            }, 100);
          }}
        >
          {({
            // Unused props: handleSubmit, handleChange, handleBlur, values, isValid,
            touched,
            errors,
            isSubmitting,
            // handleSubmit,
          }) => (
            <Form>
              <FormField
                autoComplete="username"
                className="mb-3 "
                errors={errors}
                label="Name"
                name="name"
                touched={touched}
                type="text"
              />

              {isSubmitting ? (
                <button
                  type="submit"
                  className="text-lg bg-red-700 text-gray-200 rounded flex items-center px-5 py-2"
                  disabled
                >
                  <FaSpinner className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Submiting...
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-lg text-gray-100 bg-red-600 hover:bg-red-700 transition rounded px-5 py-2"
                >
                  Submit
                </button>
              )}
            </Form>
          )}
        </Formik>
      </section>

      <section className="bg-cusOrange lg:flex lg:flex-col lg:items-start lg:pr-[2rem] ">
        <div className="p-4 lg:mt-[5rem] lg:text-left lg:ml-10">
          <h1 className="font-bold lg:text-xl">Get in touch</h1>
          <h4 className="mt-2 lg:mt-1">
            We love to hear from you,
            <br /> Our team is always here to chat.
          </h4>
        </div>
        <div className="flex flex-col bg-cusOrange p-4 lg:flex lg:flex-row lg:items-start lg:text-left lg:ml-10 lg:mt-5">
          <div className="flex justify-center items-center mr-3">
            <FaMediumM className="lg:mt-1" />
            <h2 className="font-bold ml-2 block lg:hidden">Email</h2>
          </div>
          <div className="lg:flex lg:flex-col lg:items-start">
            <h2 className="font-bold ml-2 lg:m-0 lg:block hidden">Email</h2>
            <h3 className="lg:mt-1">Contact us via email</h3>
            <h3>hi@untitiledui.com</h3>
          </div>
        </div>

        <div className="flex flex-col bg-cusOrange p-4 lg:flex lg:flex-row lg:items-start lg:text-left lg:ml-10 lg:mt-5">
          <div className="flex justify-center items-center mr-3">
            <FaPhoneAlt className="lg:mt-1" />
            <h2 className="font-bold ml-2 block lg:hidden">Phone</h2>
          </div>
          <div className="lg:flex lg:flex-col lg:items-start">
            <h2 className="font-bold ml-2 lg:m-0 lg:block hidden">Phone</h2>
            <h3 className="lg:mt-1">Contact us via phone</h3>
            <h3>552-555-5555</h3>
          </div>
        </div>
        <div className="flex flex-col bg-cusOrange p-4 lg:flex lg:flex-row lg:items-start lg:text-left lg:ml-10 lg:mt-5">
          <div className="flex justify-center items-center mr-3">
            <FaMapMarker className="lg:mt-1" />
            <h2 className="font-bold ml-2 lg:m-0 block lg:hidden">Location</h2>
          </div>
          <div className="lg:flex lg:flex-col lg:items-start">
            <h2 className="font-bold ml-2 lg:m-0 lg:block hidden">Location</h2>
            <h3 className="lg:mt-1">Turkey, Ankara</h3>
            <h3>36 Street, Bahcelievler</h3>
          </div>
        </div>
        <div className="flex justify-center items-center p-3 lg:mt-[19rem] lg:ml-[1rem]">
          <FaInstagram className="social-icons" />
          <FaGithub className="social-icons" />
          <FaLinkedinIn className="social-icons" />
          <FaYoutube className="social-icons" />
        </div>
      </section>
    </div>
  );
}

export default Contact;
