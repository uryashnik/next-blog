import React from 'react';
import PropTypes from 'prop-types';

const Pointer = ({fill}) => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.79867 0L8.87051 8.07184V2.40732H10V10H2.40732V8.87051H8.07184L0 0.79867L0.79867 0Z"
            fill={fill}
        />
    </svg>
);

Pointer.propTypes = {
    fill: PropTypes.string,
};

export default Pointer;
