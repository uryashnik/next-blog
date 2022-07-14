import React, {useCallback, useEffect} from 'react';
import Header from '../header';
import Footer from '../footer';
import Responsive from './responsive';
import {useDispatch, useSelector} from 'react-redux';
import {set} from './slices/theme';
import {requestCategories, gotRequest, errorCategories} from './slices/categories';
import {getDocs, collection} from 'firebase/firestore';
import db from '../../firebase';

const Layout = ({children}) => {
    const {theme, error, standBy, categories} = useSelector(({theme, categories}) => ({
        theme,
        error: categories.error,
        standBy: categories.status === 'none' || categories.status === 'request',
        categories: categories.data,
    }));
    const dispatch = useDispatch();

    const toggleTheme = useCallback(() => {
        if (theme === 'dark') {
            dispatch(set('white'));
        } else {
            dispatch(set('dark'));
        }
    }, [theme]);

    useEffect(() => {
        const load = async () => {
            try {
                dispatch(requestCategories());
                const categoriesRef = await getDocs(collection(db, 'categories'));
                const categories = categoriesRef.docs.map((item) => item.data().name);
                dispatch(gotRequest(categories));
            } catch (e) {
                dispatch(errorCategories(e.message));
            }
        };
        load();
    }, []);

    return (
        <div className={`${theme === 'dark' ? 'dark' : ''} `}>
            <div className="flex flex-col min-h-[100vh] border-coverBrand dark:bg-contentDark text-primary dark:text-white">
                {standBy ? (
                    'Loading ... '
                ) : error ? (
                    'error!!!'
                ) : (
                    <>
                        <Responsive />
                        <Header onChangeTheme={toggleTheme} />
                        <div className="mt-[89px] px-7 py-12 w-full md:py-24 sm:mt-[98px] grow ">
                            <div className="mx-auto max-w-7xl">{children}</div>
                        </div>
                        <Footer categories={categories} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Layout;
