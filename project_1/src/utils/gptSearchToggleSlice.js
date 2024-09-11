import { createSlice } from "@reduxjs/toolkit";

const gptSearchToggle= createSlice({
    name:"gpt Search",
    initialState:{
        gptSearchView:false,
        searchedMovies:null,
        searchedTitle:null,
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.gptSearchView=!state.gptSearchView;
        },
        searchMovie:(state,action)=>{
            const {movielist,title}=action.payload;
            state.searchedMovies=movielist;
            state.searchedTitle=title;
        }
    }
})

export default gptSearchToggle.reducer;
export const {toggleGptSearch,searchMovie}=gptSearchToggle.actions;