import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieListReducer from "./movieSlice"
import trailerReducer from "./trailerSlice"
import gptSearchToggleReducer from "./gptSearchToggleSlice"
import changeLanguageReducer from "./configlanguageSlice";

const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movieList:movieListReducer,
            trailer:trailerReducer,
            gptSearchToggle:gptSearchToggleReducer,
            changeLanguage:changeLanguageReducer,
        }
    }
);

export default appStore;