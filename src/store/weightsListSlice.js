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
            state.weightUnit = action.payload
        },
        changeDiscsType: (state, action) => {
            state.weightsList = []
            state.discsType = action.payload
        },
        manualInputCalc: (state, action) => {
            let inputNumber = parseInt(action.payload) / 2 - 10
            let weightsAvailable = []

            if (state.discsType == 'calibrated') {
                weightsAvailable = [25, 20, 15, 10, 5, 2.5, 1.25];
            } else {
                weightsAvailable = [20, 15, 10, 5, 2.5, 1.25];
            }

            const weightsToPush = [];

            weightsAvailable.sort((a, b) => b - a);

            for (let weight of weightsAvailable) {
                while (inputNumber >= weight) {
                    weightsToPush.push(weight);
                    inputNumber -= weight;
                }
            }

            state.weightsList = weightsToPush.sort((a, b) => a - b)
        }
    }
})

export const { addWeight, removeWeight, clearBar, changeBarWeight, changeWeightUnit, changeDiscsType, manualInputCalc } = weightsListSlice.actions
export default weightsListSlice.reducer