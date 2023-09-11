import { createSlice } from "@reduxjs/toolkit";

var storageItemLanguageID = localStorage.getItem("languageID")

if (storageItemLanguageID === null) {
	localStorage.setItem("languageID", 1)
	storageItemLanguageID = 1;
}

const languageSlice = createSlice({
  	name: "language",
  	initialState: {
        languageID: storageItemLanguageID
    },
  	reducers: {
    	SET_LANGUAGE_ID(state, action) {
			state.languageID = action.payload;
            localStorage.setItem("languageID", parseInt(action.payload));
    	},
    },
});


export const {SET_LANGUAGE_ID} = languageSlice.actions;
export const selectLanguageID = state => state.language.languageID;
export default languageSlice;