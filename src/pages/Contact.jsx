import { useFormik } from 'formik';
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarker,
  FaPhoneAlt,
  FaMediumM,
} from 'react-icons/fa';

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      text: '',
      checked: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="lg:flex lg:flex-row-reverse lg:justify-end lg:h-screen">
      <section>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col justify-center items-center bg-red-200"
        >
          <label htmlFor="name" className="flex flex-col items-start mt-7">
            Name
            <input
              id="name"
              type="text"
              placeholder="Your name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="w-[11.3rem] p-1  mt-2 text-[12px] text-left"
            />
          </label>
          <label htmlFor="email" className="flex flex-col items-start mt-7">
            Email
            <input
              id="email"
              type="email"
              placeholder="Your email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-[11.3rem] p-1  mt-2 text-[12px] text-left"
            />
          </label>
          <label htmlFor="text" className="flex flex-col items-start mt-7">
            How can we help?
            <textarea
              id="text"
              type="text"
              placeholder="Tell us about the project..."
              onChange={formik.handleChange}
              value={formik.values.text}
              className="w-[11.3rem] p-1 pb-[8rem] mt-2 text-[12px] text-left"
            />
          </label>
          <div>
            <label htmlFor="website-design">
              Website Design
              <input
                type="checkbox"
                name="checked"
                value="website-design"
                id="website-design"
              />
            </label>
          </div>

          <button type="submit" className="px-[4.13rem] py-1 mt-2 bg-cusOrange">
            Submit
          </button>
        </form>
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
