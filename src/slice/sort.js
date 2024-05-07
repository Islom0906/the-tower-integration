import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
    name: 'sortSlice' ,
    initialState: {
        sort: null
    },
    reducers: {
        changleSort: (state,{payload} ) =>{
            state.sort = payload
        }
    }
})



export const {changleSort} = sortSlice.actions
export default sortSlice.reducer

