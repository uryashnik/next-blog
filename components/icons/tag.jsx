import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({fill}) => (
    <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 10.4535L7.45227 15.2692V13.3899L1.78206 9.92496V9.8075L7.45227 6.34258V4.4633L0 9.27896V10.4535Z"
            fill={fill}
        />
        <path d="M14.5357 0H13.2859L9.46721 18H10.717L14.5357 0Z" fill={fill} />
        <path
            d="M24 10.4535V9.27896L16.5477 4.4633V6.34258L22.2179 9.8075V9.92496L16.5477 13.3899V15.2692L24 10.4535Z"
            fill={fill}
        />
    </svg>
);

Tag.propTypes = {
    fill: PropTypes.string,
};

export default Tag;
