import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../redux/features/languageSlice";

const store = configureStore({
    reducer: {
        language: languageReducer.reducer
    }
});

export default store;