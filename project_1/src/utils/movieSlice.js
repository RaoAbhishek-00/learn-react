import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movieList",
    initialState:{
        movies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.movies = action.payload
        }
    }
})

export default movieSlice.reducer;
export const {addNowPlayingMovies} = movieSlice.actions;