import React, {useState, useCallback, useEffect} from 'react';
import EventListener from 'react-event-listener';
import _debounce from 'lodash.debounce';
import {setMobile} from './slices/isMobile';
import {setMd} from './slices/isMd';
import {setLg} from './slices/isLg';
import {setXl} from './slices/isXl';
import {useDispatch} from 'react-redux';

const MIN_MOBILE = 0,
    MAX_MOBILE = 767,
    MIN_MD = 768,
    MAX_MD = 1023,
    MIN_LG = 1024,
    MAX_LG = 1279,
    VIEWPORT_MOBILE = 'mobile',
    VIEWPORT_MD = 'md',
    VIEWPORT_LG = 'lg',
    VIEWPORT_XL = 'xl';

const Responsive = ({children}) => {
    const dispatch = useDispatch();
    const getType = useCallback(() => {
        if (typeof window !== 'undefined') {
            const width = window.document.body.offsetWidth;

            if (width >= MIN_MOBILE && width <= MAX_MOBILE) {
                return VIEWPORT_MOBILE;
            } else if (width >= MIN_MD && width <= MAX_MD) {
                return VIEWPORT_MD;
            } else if (width >= MIN_LG && width <= MAX_LG) {
                return VIEWPORT_LG;
            } else {
                return VIEWPORT_XL;
            }
        }
    }, []);
    const [viewport, setViewport] = useState(getType());
    const handleResize = useCallback(
        _debounce(() => {
            const nextViewport = getType();

            if (nextViewport !== viewport) {
                setViewport(nextViewport);
            }
        }, 300),
        [getType, viewport],
    );

    useEffect(() => {
        if (viewport) {
            dispatch(setMobile(viewport === VIEWPORT_MOBILE));
            dispatch(setMd(viewport === VIEWPORT_MD));
            dispatch(setLg(viewport === VIEWPORT_LG));
            dispatch(setXl(viewport === VIEWPORT_XL));
        }
    }, [viewport]);

    const eventListener =
        typeof window !== 'undefined' ? (
            <EventListener target={window} onResize={handleResize} />
        ) : null;

    return (
        <>
            {eventListener}
            {children}
        </>
    );
};

export default Responsive;
