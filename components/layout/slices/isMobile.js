import {createSlice} from '@reduxjs/toolkit';

const isMobile = createSlice({
    name: 'isMobile',
    initialState: false,
    reducers: {
        setMobile: (state, action) => action.payload,
    },
});

export const {setMobile} = isMobile.actions;
export default isMobile.reducer;
