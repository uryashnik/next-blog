import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children, className, ...rest}) => {
    const baseStyles =
        'bg-coverBrand hover:bg-gray-200 active:bg-gray-300 rounded-2xl dark:bg-[#292929] dark:hover:bg-opacity-40 dark:active:bg-opacity-60';

    return (
        <button className={baseStyles + ' ' + className} {...rest}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};

export default Button;
