import {createSlice} from '@reduxjs/toolkit';

const isLg = createSlice({
    name: 'isLg',
    initialState: false,
    reducers: {
        setLg: (state, action) => action.payload,
    },
});

export const {setLg} = isLg.actions;
export default isLg.reducer;
