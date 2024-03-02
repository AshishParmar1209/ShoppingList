import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../../screens/home/api/homeSlice";

export const store = configureStore({
    reducer : {
        home : homeSlice,
    }
});