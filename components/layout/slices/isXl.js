import {createSlice} from '@reduxjs/toolkit';

const isXl = createSlice({
    name: 'isXl',
    initialState: false,
    reducers: {
        setXl: (state, action) => action.payload,
    },
});

export const {setXl} = isXl.actions;
export default isXl.reducer;
