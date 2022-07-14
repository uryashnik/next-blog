import React from 'react';
import PropTypes from 'prop-types';

const LinkedIn = ({fill}) => (
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_631_1534)">
            <path
                d="M13.8155 14.1367V14.1361H13.8189V9.13496C13.8189 6.68837 13.2922 4.80371 10.432 4.80371C9.057 4.80371 8.13427 5.55826 7.75757 6.2736H7.71779V5.03212H5.00586V14.1361H7.82972V9.62815C7.82972 8.44121 8.05472 7.29348 9.52461 7.29348C10.9729 7.29348 10.9945 8.64803 10.9945 9.70428V14.1367H13.8155Z"
                fill={fill}
            />
            <path d="M0.40625 5.03223H3.23352V14.1362H0.40625V5.03223Z" fill={fill} />
            <path
                d="M1.81914 0.5C0.915163 0.5 0.181641 1.23352 0.181641 2.1375C0.181641 3.04148 0.915163 3.79034 1.81914 3.79034C2.72312 3.79034 3.45664 3.04148 3.45664 2.1375C3.45607 1.23352 2.72255 0.5 1.81914 0.5V0.5Z"
                fill={fill}
            />
        </g>
        <defs>
            <clipPath id="clip0_631_1534">
                <rect
                    width="13.6364"
                    height="13.6364"
                    fill={fill}
                    transform="translate(0.181641 0.5)"
                />
            </clipPath>
        </defs>
    </svg>
);

LinkedIn.propTypes = {
    fill: PropTypes.string,
};

export default LinkedIn;
