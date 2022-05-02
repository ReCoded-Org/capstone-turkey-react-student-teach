import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaMediumM,
  FaSpinner,
} from 'react-icons/fa';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import FormField from '../../components/FormField/FormField';

const ContactSchema = Yup.object().shape({
  name: Yup.string().max(24).required(),
  email: Yup.string().max(24).required(),
  message: Yup.string(),
});

function Contact() {
  const darkMode = useSelector((state) => state.darkModeReducer.darkMode);

  return (
    <div className="lg:flex lg:flex-row-reverse lg:justify-end lg:w-[100%] lg:text-base md:text-base text-sm">
      <section
        className={`h-screen lg:h-[93vh] flex flex-col justify-center items-center lg:w-[100%]  ${
          darkMode ? 'text-white' : 'text-black'
        }  ${darkMode ? 'bg-primaryDark' : 'bg-white'}`}
      >
        <h1 className="mb-10 font-semibold text-2xl md:text-3xl lg:text-[2.3rem] lg:mb-[3.5]">
          Level up Your brand
        </h1>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
            service: [],
          }}
          validationSchema={ContactSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
            }, 1000);
          }}
        >
          {({
            // Unused props: handleSubmit, handleChange, handleBlur, values, isValid,
            touched,
            errors,
            isSubmitting,
          }) => (
            <Form className="flex flex-col w-[15rem] lg:w-[20rem]">
              <FormField
                autoComplete="name"
                className="mb-10 lg:text-left"
                errors={errors}
                label="Name"
                name="name"
                touched={touched}
                type="text"
                placeholder="Your Name"
              />
              <FormField
                autoComplete="email"
                className="mb-10 lg:text-left"
                errors={errors}
                label="Email"
                name="email"
                touched={touched}
                type="email"
                placeholder="You@company.com"
              />
              <FormField
                autoComplete="name"
                className="mb-3 lg:text-left"
                textfieldClass="lg:pb-[7rem]"
                errors={errors}
                label="How can we help?"
                name="message"
                touched={touched}
                type="textarea"
                placeholder="Tell us about your project"
              />

              {isSubmitting ? (
                <button
                  type="submit"
                  className="text-lg bg-primary-color text-white rounded pl-10 pr-5 py-2 mb-10 lg:mb-0 relative"
                  disabled
                >
                  <FaSpinner className="animate-spin h-5 text-white mr-[4rem] lg:mr-[6rem] absolute right-[7rem] top-[0.8rem]" />
                  Submiting...
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-lg text-gray-100 bg-primary-color transition rounded px-8 py-2 mb-10 lg:mb-0 hover:scale-110 ease-in-out"
                >
                  Submit
                </button>
              )}
            </Form>
          )}
        </Formik>
      </section>

      <section className="bg-primary-color pt-10 md:h-3/4 lg:h-3/4 lg:pt-0 lg:flex lg:flex-col lg:items-start lg:pr-[2rem]">
        <div className="p-4 flex flex-col items-center text-center lg:flex lg:items-start lg:mt-[3rem] lg:text-left lg:ml-10">
          <h1 className="font-bold lg:text-xl">Get in touch</h1>
          <h4 className="mt-2 lg:mt-1">
            We love to hear from you,
            <br /> Our team is always here to chat.
          </h4>
        </div>
        <div className="contact-info-icon-container">
          <div className="contact-info-icon">
            <FaMediumM className="lg:mt-1" />
            <h2 className="font-bold ml-2 block lg:hidden">Email</h2>
          </div>
          <div className="lg:flex lg:flex-col lg:items-start">
            <h2 className="font-bold ml-2 lg:m-0 lg:block hidden">Email</h2>
            <h3 className="lg:mt-1">Contact us via email!</h3>
            <h3>hi@untitiledui.com</h3>
          </div>
        </div>

        <div className="contact-info-icon-container">
          <div className="contact-info-icon">
            <FaPhoneAlt className="lg:mt-1" />
            <h2 className="font-bold ml-2 block lg:hidden">Phone</h2>
          </div>
          <div className="lg:flex lg:flex-col lg:items-start">
            <h2 className="font-bold ml-2 lg:m-0 lg:block hidden">Phone</h2>
            <h3 className="lg:mt-1">You don't need to contact us via phone.</h3>
            <h3>XXX-XXX-XXXX-XXX</h3>
          </div>
        </div>
        <section className="text-gray-600 body-font ml-[50px]">
          <div id="map" className="inset-0 flex flex-row justify-center">
            <MapContainer
              center={[39.9035662, 32.4825694]}
              zoom={4}
              style={{ width: '332px', height: '200px' }}
              className="border-4 rounded-md border-secondary-color"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[39.8951569, 32.7609327]}>
                <Popup>One of us studies here.</Popup>
              </Marker>
              <Marker position={[39.8742115, 32.7371888]}>
                <Popup>One of us studies here.</Popup>
              </Marker>
              <Marker position={[38.7101807, 35.5316106]}>
                <Popup>One of us studied here.</Popup>
              </Marker>
              <Marker position={[36.8843927, 30.6689809]}>
                <Popup>One of us lives here.</Popup>
              </Marker>
              <Marker position={[38.4189042, 27.1265113]}>
                <Popup>One of us lives here.</Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>
        <div className="flex justify-center items-center p-3 lg:mt-2 lg:ml-[1rem]">
          <FaInstagram className="contact-social-icons" />
          <FaGithub className="contact-social-icons" />
          <FaLinkedinIn className="contact-social-icons" />
          <FaYoutube className="contact-social-icons" />
        </div>
      </section>
    </div>
  );
}

export default Contact;
