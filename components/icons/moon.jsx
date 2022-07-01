import React from 'react';
import PropTypes from 'prop-types';

const Moon = ({fill}) => (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.23366 2.10905C4.83601 8.52126 9.44909 12.6628 12.8017 13.8449C11.6099 14.7719 10.1265 15.2991 8.57449 15.2991C4.79314 15.2991 1.7149 12.2461 1.7149 8.49575C1.7149 5.56178 3.60129 3.05303 6.23366 2.10905ZM8.56592 0C3.77278 0 0 3.85243 0 8.49575C0 13.1901 3.84137 17 8.57449 17C11.7556 17 14.5166 15.2821 16 12.7309C9.56056 12.5183 5.63344 5.56178 8.86602 0C8.76313 0 8.66881 0 8.56592 0Z"
            fill={fill}
        />
    </svg>
);

Moon.propTypes = {
    fill: PropTypes.string,
};

export default Moon;
