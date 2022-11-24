import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    visible: true
};

const dayLoadIndicatorSlice = createSlice({
    name: 'dayLoadIndicator',
    initialState: initialState,
    reducers: {
        showLoadingIndicator: (state) => {
            state.visible = true;
        },
        hideLoadingIndicator: (state) => {
            state.visible = false;
        }
    }
});

export const {showLoadingIndicator, hideLoadingIndicator} = dayLoadIndicatorSlice.actions;
export default dayLoadIndicatorSlice.reducer;