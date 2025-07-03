import { configureStore } from "@reduxjs/toolkit";
import appSlice from './appSlice'
import SearchResultSlice from './SearchResultSlice';

const store = configureStore({
    reducer : {
        app : appSlice,
        search : SearchResultSlice ,
    }
})

export  default store;
