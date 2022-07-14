import React from 'react';
import PropTypes from 'prop-types';

const Announce = ({date, text}) => (
    <div className="py-5 border-b border-dashed border-primary border-opacity-10 dark:border-dividerDark">
        <div className="mb-2">
            <span className="text-sm mr-2">{date}</span>
            <span className="text-xs font-medium px-2 py-[2px] border rounded-lg border-primary dark:border-white">
                Premier
            </span>
        </div>
        <div className="font-medium">{text}</div>
    </div>
);

Announce.propTypes = {
    date: PropTypes.string,
    text: PropTypes.string,
};

export default Announce;
