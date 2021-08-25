//DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 55,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        
        incremented(state) {
            //immer makes this happen under the hood
            state.value++;
        },

        amountAdded(state, action: PayloadAction<number>){
            state.value += action.payload
        }
    }
    //increment
    
    //decrement
    //reset
})

export const {incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;