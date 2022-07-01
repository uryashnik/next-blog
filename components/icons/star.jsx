import React from 'react';
import PropTypes from 'prop-types';

const Star = ({fill}) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.0746 6.86179L9 1.68052L6.92539 6.86179L1.57347 7.32458L5.64321 10.9896L4.41015 16.4569L9 13.5407L13.5898 16.4569L12.3568 10.9896L16.4265 7.32458L11.0746 6.86179ZM6.1169 5.69778L0.831083 6.15486C0.0315805 6.22399 -0.29239 7.26696 0.315572 7.81446L4.33505 11.4342L3.11722 16.834C2.93302 17.6507 3.78118 18.2953 4.46684 17.8596L9 14.9795L13.5332 17.8596C14.2188 18.2953 15.067 17.6507 14.8828 16.8339L13.665 11.4342L17.6844 7.81446C18.2924 7.26696 17.9684 6.22399 17.1689 6.15486L11.8831 5.69778L9.83411 0.580506C9.52419 -0.193503 8.47581 -0.193501 8.16589 0.580507L6.1169 5.69778Z"
            fill={fill}
        />
    </svg>
);

Star.propTypes = {
    fill: PropTypes.string,
};

export default Star;