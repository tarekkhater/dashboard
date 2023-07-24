import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: "Slice1",
    initialState:{
        dark: false,
        users:false,
    },
    reducers:{
        Number:(state , action)=>{ state.number += action.payload},
        showUsers:(state ) => {state.users = !state.users},
        

    }
})

export const {Number , showUsers} = slice.actions;
export default slice.reducer;


