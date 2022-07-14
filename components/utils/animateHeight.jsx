import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const AnimateHeight = ({open, children}) => {
    const animated = useRef(null);
    const child = useRef(null);

    useEffect(() => {
        if (open) {
            animated.current.style.maxHeight = child.current.clientHeight + 'px';
        } else {
            animated.current.style.maxHeight = '0px';
        }
    }, [open]);

    return (
        <>
            <div ref={animated} className="max-h-0 overflow-hidden transition-all">
                <div ref={child}>{children}</div>
            </div>
        </>
    );
};

AnimateHeight.propTypes = {
    open: PropTypes.bool,
    children: PropTypes.any,
};

export default AnimateHeight;
