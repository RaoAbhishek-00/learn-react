import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieListReducer from "./movieSlice"
import trailerReducer from "./trailerSlice"

const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movieList:movieListReducer,
            trailer:trailerReducer,
        }
    }
);

export default appStore;