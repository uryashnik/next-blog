import React from 'react';
import PropTypes from 'prop-types';

const Git = ({fill}) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_631_1539)">
            <path
                d="M9.00035 0.13623C4.10615 0.13623 0.136719 4.10492 0.136719 8.99987C0.136719 12.9161 2.67615 16.2385 6.19871 17.4107C6.64115 17.4927 6.78445 17.2179 6.78445 16.9845V15.3344C4.31888 15.8707 3.80553 14.2885 3.80553 14.2885C3.40223 13.264 2.82092 12.9915 2.82092 12.9915C2.01655 12.4412 2.88223 12.453 2.88223 12.453C3.77229 12.515 4.24058 13.3667 4.24058 13.3667C5.03092 14.7213 6.31393 14.3299 6.8199 14.1031C6.89893 13.5307 7.12865 13.1392 7.38274 12.9183C5.41428 12.693 3.34462 11.933 3.34462 8.53748C3.34462 7.56913 3.69104 6.77879 4.25757 6.15833C4.16598 5.93453 3.8624 5.03265 4.34399 3.81242C4.34399 3.81242 5.08854 3.57458 6.78223 4.72095C7.4891 4.52447 8.24695 4.42623 9.00035 4.42254C9.75376 4.42623 10.5123 4.52447 11.2207 4.72095C12.9129 3.57458 13.656 3.81242 13.656 3.81242C14.1383 5.03339 13.8347 5.93526 13.7431 6.15833C14.3119 6.77879 14.6554 7.56987 14.6554 8.53748C14.6554 11.9419 12.582 12.6916 10.6084 12.9109C10.926 13.1857 11.2163 13.7249 11.2163 14.5522V16.9845C11.2163 17.2201 11.3581 17.4971 11.8079 17.41C15.3275 16.2363 17.864 12.9146 17.864 8.99987C17.864 4.10492 13.8953 0.13623 9.00035 0.13623Z"
                fill={fill}
            />
        </g>
        <defs>
            <clipPath id="clip0_631_1539">
                <rect
                    width="17.7273"
                    height="17.7273"
                    fill={fill}
                    transform="translate(0.136719 0.13623)"
                />
            </clipPath>
        </defs>
    </svg>
);

Git.propTypes = {
    fill: PropTypes.string,
};

export default Git;
