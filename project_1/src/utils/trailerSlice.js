import { createSlice } from "@reduxjs/toolkit";

const trailerSlice = createSlice({
    name:"trailer",
    initialState:{
        movie:null,
    },
    reducers:{
        addTrailer:(state,action)=>{
            state.movie = action.payload
        }
    }
})

export default trailerSlice.reducer;
export const {addTrailer} = trailerSlice.actions;