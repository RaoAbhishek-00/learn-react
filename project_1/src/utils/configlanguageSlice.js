import { createSlice } from "@reduxjs/toolkit";

const configLanguageSlice = createSlice({
    name:"lang",
    initialState:{
        language:"en"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.language=action.payload;
        }
    }
})
export default configLanguageSlice.reducer;
export const {changeLanguage} = configLanguageSlice.actions;