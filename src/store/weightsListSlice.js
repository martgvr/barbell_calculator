import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    weightsList: []
}

export const weightsListSlice = createSlice({ 
    name: "weightsList",
    initialState,
    reducers: {
        addWeight: (state, action) => {
            state.weightsList.push(action.payload)
            state.weightsList.sort((a,b)=>a-b)
        },
        clearBar: (state, action) => {
            state.weightsList = []
        }
    }
})

export const { addWeight, clearBar } = weightsListSlice.actions
export default weightsListSlice.reducer