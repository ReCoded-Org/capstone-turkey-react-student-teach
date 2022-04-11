/* eslint-disable jsx-a11y/label-has-associated-control */

import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';

function FormField({
  autoComplete = '',
  className = '',
  textfieldClass = '',
  label,
  name,
  rows,
  type,
  value,
  placeholder,
}) {
  if (type === 'textarea') {
    return (
      <div className={className}>
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <Field
          as="textarea"
          autoComplete={autoComplete}
          className={`my-1 focus:ring-cusOrange focus:border-cusOrange block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${textfieldClass}`}
          id={name}
          name={name}
          rows={rows}
          placeholder={placeholder}
        />
        <ErrorMessage
          className="text-sm text-red-600"
          component="div"
          name={name}
        />
      </div>
    );
  }

  if (type === 'checkbox') {
    return (
      <div className={className}>
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
        <Field
          type="checkbox"
          className="mr-2 text-cusOrange focus:ring-0"
          id={name}
          name={name}
          value={value}
        />
        <ErrorMessage
          className="text-sm text-red-600"
          component="div"
          name={name}
        />
      </div>
    );
  }
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Field
        autoComplete={autoComplete}
        className="my-1 focus:ring-cusOrange focus:border-cusOrange block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
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
  textfieldClass: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rows: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};
FormField.defaultProps = {
  autoComplete: '',
  className: '',
  textfieldClass: '',
  placeholder: '',
  value: '',
  rows: '5',
};

export default FormField;