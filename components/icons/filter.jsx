import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({open}) => {
    return (
        <div className="relative h-[11px] w-5">
            <span className={`absolute h-0.5 top-0 left-0 transition-all w-full bg-primary ${open ? 'scale-x-50 -translate-x-1/8' : ''}`}/>
            <span className={`absolute h-0.5 top-[5px] left-0 w-full bg-primary scale-x-75 -translate-x-1/8`}/>
            <span className={`absolute h-0.5 top-[10px] left-0 transition-all w-full bg-primary ${open ? '' : 'scale-x-50 -translate-x-1/8'}`}/>
        </div>
    );
};

Filter.propTypes = {
    open: PropTypes.bool,
};

export default Filter;
