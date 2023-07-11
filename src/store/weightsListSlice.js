import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    barWeight: 20,
    weightsList: [],
    weightUnit: 'kg',
    discsType: 'calibrated',
}

export const weightsListSlice = createSlice({ 
    name: "weightsList",
    initialState,
    reducers: {
        addWeight: (state, action) => {
            state.weightsList.push(action.payload)
            state.weightsList.sort((a,b)=>a-b)
        },
        removeWeight: (state, action) => {
            const findIndex = state.weightsList.findIndex(item => item == action.payload)
            if (findIndex != -1) {
                state.weightsList.splice(findIndex, 1)
            }
        },
        clearBar: (state, action) => {
            state.weightsList = []
        },
    }
})

export const { addWeight, removeWeight, clearBar } = weightsListSlice.actions
export default weightsListSlice.reducer