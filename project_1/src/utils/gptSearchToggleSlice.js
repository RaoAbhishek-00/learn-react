import { createSlice } from "@reduxjs/toolkit";

const gptSearchToggle= createSlice({
    name:"gpt Search",
    initialState:{
        gptSearchView:false,
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.gptSearchView=!state.gptSearchView;
        }
    }
})

export default gptSearchToggle.reducer;
export const {toggleGptSearch}=gptSearchToggle.actions;