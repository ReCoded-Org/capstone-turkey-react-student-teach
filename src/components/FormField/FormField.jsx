/* eslint-disable jsx-a11y/label-has-associated-control */

import PropTypes from 'prop-types';
import { Field } from 'formik';

function FormField({
  autoComplete = '',
  className = '',
  errors,
  label,
  name,
  touched,
  type,
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        autoComplete={autoComplete}
        className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
      {errors[name] && touched[name] ? (
        // 	<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="absolute text-red-500 right-2 bottom-3" viewBox="0 0 1792 1792">
        // 	<path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z">
        // 	</path>
        // </svg>
        // <p class="absolute text-sm text-red-500 -bottom-6">
        // 	Email is invalid
        // </p>
        <div>{errors[name]}</div>
      ) : null}
    </div>
  );
}
FormField.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  touched: PropTypes.arrayOf(PropTypes.bool).isRequired,
  type: PropTypes.string.isRequired,
};
FormField.defaultProps = {
  autoComplete: '',
  className: '',
};

export default FormField;
