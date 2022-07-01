import React, {useState, useCallback, useEffect} from 'react';
import EventListener from 'react-event-listener';
import _debounce from 'lodash.debounce';
import {change} from './slices/isMobile';
import {useDispatch} from 'react-redux';

const MIN_MOBILE = 0,
    MAX_MOBILE = 767,
    // MIN_TABLET = 768,
    // MAX_TABLET = 1270,
    VIEWPORT_MOBILE = 'mobile',
    // VIEWPORT_TABLET = 'tablet',
    VIEWPORT_DESKTOP = 'desktop';

const Responsive = ({children}) => {
    const dispatch = useDispatch();
    const getType = useCallback(() => {
        if (typeof window !== 'undefined') {
            const width = window.document.body.offsetWidth;

            if (width >= MIN_MOBILE && width <= MAX_MOBILE) {
                return VIEWPORT_MOBILE;
                // } else if (width >= MIN_TABLET && width <= MAX_TABLET) {
                //     return VIEWPORT_TABLET;
            } else {
                return VIEWPORT_DESKTOP;
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
            console.log('viewport === VIEWPORT_MOBILE: ', viewport === VIEWPORT_MOBILE);
            dispatch(change(viewport === VIEWPORT_MOBILE));
            // isTablet(viewport === VIEWPORT_TABLET);
            // isLaptop(viewport === VIEWPORT_DESKTOP);
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
