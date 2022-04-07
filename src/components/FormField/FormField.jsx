/* eslint-disable jsx-a11y/label-has-associated-control */

import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';

function FormField({
  autoComplete = '',
  className = '',
  label,
  name,
  rows,
  type,
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {type === 'textarea' ? (
        <Field
          as={type}
          autoComplete={autoComplete}
          className="my-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          id={name}
          name={name}
          rows={rows}
        />
      ) : (
        <Field
          autoComplete={autoComplete}
          className="my-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          id={name}
          name={name}
          type={type}
        />
      )}

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
  rows: PropTypes.string,
  type: PropTypes.string.isRequired,
};
FormField.defaultProps = {
  autoComplete: '',
  className: '',
  rows: '5',
};

export default FormField;
