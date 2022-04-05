/* eslint-disable jsx-a11y/label-has-associated-control */

import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';

function FormField({ autoComplete = '', className = '', label, name, type }) {
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
        className="my-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
      <ErrorMessage
        className="text-sm text-red-600"
        component="div"
        name={name}
      />
    </div>
  );
}
FormField.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
FormField.defaultProps = {
  autoComplete: '',
  className: '',
};

export default FormField;
