import React from 'react';
import PropTypes from 'prop-types';

const buttonFlat = ({children, className, ...rest}) => {
    const baseStyles =
        'hover:bg-gray-200 active:bg-gray-300 rounded-2xl dark:hover:bg-opacity-10 dark:active:bg-opacity-20 rounded-lg border-[1px] border-primary px-7 py-[10px] dark:border-white';

    return (
        <button className={baseStyles + ' ' + className} {...rest}>
            {children}
        </button>
    );
};

buttonFlat.propTypes = {};

export default buttonFlat;
