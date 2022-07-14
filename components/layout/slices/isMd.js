import {createSlice} from '@reduxjs/toolkit';

const isMd = createSlice({
    name: 'isMd',
    initialState: false,
    reducers: {
        setMd: (state, action) => action.payload,
    },
});

export const {setMd} = isMd.actions;
export default isMd.reducer;
