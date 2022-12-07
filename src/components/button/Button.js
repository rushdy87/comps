import PropTypes from 'prop-types';

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  return <button>{children}</button>;
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        'Only one of [primary, secondary, success, warning, danger] can be true'
      );
    }
  },
};

export default Button;

/**
 * button varitions:
 ** primary =>
 ** secondary =>
 ** success =>
 ** warning =>
 ** danger =>
 ** outline =>
 **rounded =>
 *
 * prop-types:
 * * js library.
 * * optional.
 * * validate the props that get passed into your component.
 * * If someone passes down the incorrect kind of value, a warning will appear in console.
 * * Used to be very popular. Now Typescript does almost the same thing (and more).
 */
