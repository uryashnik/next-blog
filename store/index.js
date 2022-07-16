import isMobile from '../components/layout/slices/isMobile';
import isMd from '../components/layout/slices/isMd';
import isLg from '../components/layout/slices/isLg';
import isXl from '../components/layout/slices/isXl';
import categories from '../components/layout/slices/categories';
import theme from '../components/layout/slices/theme';
import isLoading from '../components/layout/slices/isLoading';

import {configureStore, combineReducers} from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {isMobile, isMd, isLg, isXl, theme, categories, isLoading},
});

export default store;
