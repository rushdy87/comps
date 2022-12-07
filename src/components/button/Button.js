import classNames from 'classnames';

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const classes = classNames(
    rest.className,
    'flex items-center px-3 py-1.5 border text-white',
    {
      'border-blue-600 bg-blue-500': primary,
      'border-gray-900 bg-gray-900': secondary,
      'border-green-500 bg-green-500': success,
      'border-yellow-400 bg-yellow-400': warning,
      'border-red-500 bg-red-500': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-600': outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
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
 *
 * classnames:
 * * optional.
 * * A simple JavaScript utility for conditionally joining classNames together.
 */
