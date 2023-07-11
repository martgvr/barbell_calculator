import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    weightsList: [],
    barWeight: 20,
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
        changeBarWeight: (state, action) => {
            state.barWeight = action.payload
        },
        changeWeightUnit: (state, action) => {
            state.weightUnit = action.payload
        },
        changeDiscsType: (state, action) => {
            state.discsType = action.payload
        },
    }
})

export const { addWeight, removeWeight, clearBar, changeBarWeight, changeWeightUnit, changeDiscsType } = weightsListSlice.actions
export default weightsListSlice.reducer