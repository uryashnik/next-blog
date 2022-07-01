import {createSlice} from '@reduxjs/toolkit';

const theme = createSlice({
    name: 'theme',
    initialState: 'white',
    reducers: {
        toggle: (state, action) => {
            if (state.theme === 'dark') {
                return 'white';
            } else {
                return 'dark';
            }
        },
        set: (state, action) => action.payload,
    },
});

export const {set} = theme.actions;
export default theme.reducer;
