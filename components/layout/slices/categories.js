import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    data: null,
    status: 'none',
    error: null,
};

const categories = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        resetCategories: () => initialState,
        requestCategories: () => ({...initialState, status: 'request'}),
        gotRequest: (state, action) => ({data: action.payload, status: 'got', error: null}),
        errorCategories: (state, action) => ({
            ...initialState,
            status: 'error',
            error: action.payload,
        }),
    },
});

export const {resetCategories, requestCategories, gotRequest, errorCategories} = categories.actions;
export default categories.reducer;
