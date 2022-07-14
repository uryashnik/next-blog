import React from 'react';
import PropTypes from 'prop-types';

const baseStyles =
    'bg-coverBrand hover:bg-gray-200 active:bg-gray-300 rounded-2xl dark:bg-[#292929] dark:hover:bg-opacity-40 dark:active:bg-opacity-60';

const Button = React.forwardRef(({children, className, ...rest}, ref) => (
    <button className={baseStyles + ' ' + className} {...rest} ref={ref}>
        {children}
    </button>
));

Button.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};

export default Button;
