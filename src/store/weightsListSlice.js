import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    barWeight: 20,
    weightUnit: 'kg',
    weightsList: [],
    weightsAvailable: [25, 20, 15, 10, 5, 2.5, 1.25]
}

export const weightsListSlice = createSlice({
    name: "weightsList",
    initialState,
    reducers: {
        addWeight: (state, action) => {
            if (state.weightsList.length < 15) {
                state.weightsList.push(action.payload)
                state.weightsList.sort((a, b) => a - b)
            }
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
            state.weightsList = []
            state.barWeight = action.payload
        },
        changeWeightUnit: (state, action) => {
            state.weightsList = []
        
            if (action.payload === 'lbs' && state.weightUnit === 'kg') {
                const conversionTable = { 25: 55, 20: 45, 15: 35, 10: 25, 5: 10, 2.5: 5, 1.25: 2.5 }
                state.weightsAvailable = state.weightsAvailable.map(weight => conversionTable[weight])
            }
        
            if (action.payload === 'kg' && state.weightUnit === 'lbs') {
                const conversionTable = { 55: 25, 45: 20, 35: 15, 25: 10, 10: 5, 5: 2.5, 2.5: 1.25 }
                state.weightsAvailable = state.weightsAvailable.map(weight => conversionTable[weight])
            }
        
            state.weightUnit = action.payload
        },
        manualInputCalc: (state, action) => {
            let inputNumber = parseInt(action.payload) / 2 - (state.barWeight / 2)

            if (state.weightUnit == 'kg') {
                state.weightsAvailable = [25, 20, 15, 10, 5, 2.5, 1.25]
            } else {
                state.weightsAvailable = [55, 45, 35, 25, 10, 5, 2.5]
            }

            const weightsToPush = []

            state.weightsAvailable.sort((a, b) => b - a)

            for (let weight of state.weightsAvailable) {
                while (inputNumber >= weight) {
                    weightsToPush.push(weight);
                    inputNumber -= weight;
                }
            }

            state.weightsList = weightsToPush.sort((a, b) => a - b)
        },
        manageWeightsAvailable: (state, action) => {
            if (action.payload.state == true) {
                state.weightsAvailable.push(action.payload.weight)
            } else {
                const indexToDelete = state.weightsAvailable.indexOf(action.payload.weight);
                state.weightsAvailable.splice(indexToDelete, 1);
            }

            state.weightsAvailable.sort((a, b) => b - a)
        },
    }
})

export const { addWeight, removeWeight, clearBar, changeBarWeight, changeWeightUnit, manualInputCalc, manageWeightsAvailable } = weightsListSlice.actions
export default weightsListSlice.reducer