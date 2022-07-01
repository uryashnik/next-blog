import React, {useCallback, useEffect, useRef, useState} from 'react';
import Header from '../header';
import Footer from '../footer';
import Responsive from './responsive';
import {useDispatch, useSelector} from 'react-redux';
import {set} from './slices/theme';

const Layout = ({children}) => {
    const {theme} = useSelector(({theme}) => ({theme}));
    const dispatch = useDispatch();
    const root = useRef(null);
    const toggleTheme = useCallback(() => {
        if (theme === 'dark') {
            dispatch(set('white'));
            // localStorage.removeItem('theme');
        } else {
            dispatch(set('dark'));
            // localStorage.setItem('theme', 'dark');
        }
    }, [theme]);

    return (
        <div ref={root} className={`${theme === 'dark' ? 'dark' : ''} `}>
            <div className="flex flex-col min-h-[100vh] text-primary dark:text-white">
                <Responsive />
                <Header changeTheme={toggleTheme} />
                <div className="mt-[89px] sm:mt-[98px] grow">{children}</div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
