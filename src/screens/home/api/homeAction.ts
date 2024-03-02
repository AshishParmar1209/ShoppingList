import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPersonList = createAsyncThunk('getPerson', async (params) => {
    try {
        const res = await axios.post('https://reqres.in/api/users?page=2', params);
        return res;
    } catch (error) {
        console.log(error);
        return error;
    }
})