import { createSlice } from "@reduxjs/toolkit";
import { getPersonList } from "./homeAction";

interface Request {
    loading : boolean;
    success : any;
    error : any;
}

const initialState : Request = {
    loading : false,
    success : null,
    error : null,
}

const homeSlice = createSlice({
    name : 'home',
    initialState,
    reducers : {},
    extraReducers: builder => {
        builder.addCase(getPersonList.pending, (state : Request) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(getPersonList.fulfilled, (state : Request, action: any) => {
            state.loading = false;
            state.error = null;
            state.success = action.payload;
        });
        
        builder.addCase(getPersonList.rejected, (state : Request, action: any) => {
            state.loading = false;
            state.success = null;
            state.error = action.error;
        });
    }
});

export default homeSlice.reducer;