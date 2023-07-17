import {createSlice} from '@reduxjs/toolkit'
export const counterReducer = createSlice({
    name:'counter',
    initialState: {
        value:0,
    },
    reducers:{
        increment:(state) => {
            console.log('INC')
            state.value +=1
        },
        decrement:(state)=>{

            state.value -=1
            console.log('DEC')
        },
    },
})
export const { increment,decrement }= counterReducer.actions;
export default counterReducer.reducer;