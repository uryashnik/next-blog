import isMobile from '../components/layout/slices/isMobile';
import theme from '../components/layout/slices/theme';
import {configureStore, combineReducers} from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {isMobile, theme},
});

export default store;
