import React from 'react';
import PropTypes from 'prop-types';

const ArrowUp = ({fill}) => (
    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.28892 3.15505L13.8843 9L15 7.83453L7.5 0L0 7.83453L1.1157 9L6.71108 3.15505L7.5 2.53593L8.28892 3.15505Z"
            fill={fill}
        />
    </svg>
);

ArrowUp.propTypes = {
    fill: PropTypes.string,
};

export default ArrowUp;
