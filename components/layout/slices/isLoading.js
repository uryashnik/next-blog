import {createSlice} from '@reduxjs/toolkit';

const isLoading = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        startLoading: () => true,
        stopLoading: () => false,
    },
});

export const {startLoading, stopLoading} = isLoading.actions;
export default isLoading.reducer;
