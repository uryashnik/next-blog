import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({open}) => (
        <div className='relative h-[11px] w-6'>
            <span
                className={`absolute h-0.5 bg-orange top-0 left-0 transition-all w-full ${open ? 'scale-x-50 -translate-x-1/8' : ''}`} />
            <span className={`absolute h-0.5 bg-orange top-[5px] left-0 w-full scale-x-75 -translate-x-1/8`} />
            <span
                className={`absolute h-0.5 bg-orange top-[10px] left-0 transition-all w-full ${open ? '' : 'scale-x-50 -translate-x-1/8'}`} />
        </div>
    );


Filter.propTypes = {
    open: PropTypes.bool,
};

export default Filter;
