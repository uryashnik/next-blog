import {createSlice} from '@reduxjs/toolkit';

const isMobile = createSlice({
    name: 'isMobile',
    initialState: false,
    reducers: {
        change: (state, action) => action.payload,
    },
});

export const {change} = isMobile.actions;
export default isMobile.reducer;
