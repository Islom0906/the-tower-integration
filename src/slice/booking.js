import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name: 'bookingSlice' ,
    initialState: {
        timeBooking: [0 , 0],
        countRoomBooking: 0,
        countOlderBooking:0,
        countChildrenBooking:0,
        typeBooking:null,
    },
    reducers: {
        changleTimeBooking: (state,{payload} ) =>{
            state.timeBooking = payload
        },
        changleStartTimeBooking: (state , {payload}) => {
            state.timeBooking[0] = payload
        },
        changleEndTimeBooking: (state , {payload}) => {
            state.timeBooking[1] = payload
        },

        changleCountRoomBooking: (state , {payload}) => {
            state.countRoomBooking = payload
        },
        changleCountOlderBooking: (state , {payload}) => {
            state.countOlderBooking = payload
        },
        changleCountChildrenBooking: (state , {payload}) => {
            state.countChildrenBooking = payload
        },
        plusCountRoomBooking: (state ) => {
            state.countRoomBooking = ++state.countRoomBooking
        }
    ,
    plusCountOlderBooking: (state ) => {

        state.countOlderBooking = ++state.countOlderBooking
    }
    ,
    plusCountChildrenBooking: (state ) => {
        state.countChildrenBooking = ++state.countChildrenBooking
},
        minusCountRoomBooking: (state ) => {
            state.countRoomBooking = --state.countRoomBooking
        }
        ,
        minusCountOlderBooking: (state ) => {
            state.countOlderBooking =  --state.countOlderBooking
        }
        ,
        minusCountChildrenBooking: (state ) => {
            state.countChildrenBooking = --state.countChildrenBooking
        },
        changleTypeBooking: (state , {payload}) => {
            state.typeBooking = payload
        },
        clearBooking: (state) => {
            state.timeBooking= [0 , 0]
                state.countRoomBooking= 0
                state.countOlderBooking=0
                state.countChildrenBooking=0
                state.typeBooking=null
        }
    }
})



export const {changleTimeBooking ,changleEndTimeBooking ,changleStartTimeBooking
,plusCountRoomBooking , changleTypeBooking, minusCountChildrenBooking, minusCountOlderBooking ,minusCountRoomBooking ,plusCountChildrenBooking ,plusCountOlderBooking
 , changleCountRoomBooking ,changleCountChildrenBooking ,clearBooking ,changleCountOlderBooking} = bookingSlice.actions
export default bookingSlice.reducer

