import { configureStore } from "@reduxjs/toolkit";
import dayLoadIndicatorReducer from "./HomeScreen/Calendar/DayCircle/DayLoadIndicator/dayLoadIndicatorSlice";

const store = configureStore({
    reducer: {
        dayLoadIndicator: dayLoadIndicatorReducer
    }
});

export default store;