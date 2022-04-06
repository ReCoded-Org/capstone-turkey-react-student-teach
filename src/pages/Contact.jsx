import { useFormik } from 'formik';
import { FaInstagram, FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

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
    <div>
      <section className="mt-5">
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

      <section className="bg-cusOrange">
        <div>
          <h1>Get in touch</h1>s
          <h4>We love to hear from you, Our team is always here to chat.</h4>
        </div>
        <div>
          <div>
            <h2>Email</h2>
          </div>
          <h3>hi@untitiledui.com</h3>
        </div>
        <div>
          <div>
            <h2>Location</h2>
          </div>
          <h3>Turkey, Ankara</h3>
          <h3>36 Street, Bahcelievler</h3>
        </div>
        <div>
          <h2>Phone</h2>
          <h3>552-555-5555</h3>
        </div>

        <div>
          <FaGithub />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </section>
    </div>
  );
}

export default Contact;
