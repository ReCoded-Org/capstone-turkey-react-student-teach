import { useFormik } from 'formik';

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
  );
}

export default Contact;
