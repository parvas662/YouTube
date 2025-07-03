import { createSlice } from "@reduxjs/toolkit"; 

const SearchResultSlice = createSlice({
    name :"search",
    initialState : {} ,
    reducers : {
        cacheResults : (state,action)=>{
            return {...state,...action.payload} // we need to return the newstate,
            //state = Object.assign(state,action.payload) // Or we can assign new object to state.
        }
    }   
})

export const {cacheResults} = SearchResultSlice.actions; 
export default SearchResultSlice.reducer;