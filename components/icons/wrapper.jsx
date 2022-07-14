import React from 'react';
import PropTypes from 'prop-types';

const IconWrapper = ({className, children}) => {
    const classes =
        'flex justify-center items-center w-[30px] h-[30px] rounded-lg cursor-pointer transition-colors' +
        ' ' +
        className;
    return <div className={classes}>{children}</div>;
};

IconWrapper.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};

export default IconWrapper;
