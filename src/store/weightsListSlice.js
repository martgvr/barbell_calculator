import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    barWeight: 20,
    discsType: 'calibrated',
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
            state.weightUnit = action.payload

            if (action.payload == 'kg') {
                if (state.discsType == 'calibrated') {
                    state.weightsAvailable = [25, 20, 15, 10, 5, 2.5, 1.25]
                } else {
                    state.weightsAvailable = [20, 15, 10, 5, 2.5, 1.25]
                }
            } else {
                if (state.discsType == 'calibrated') {
                    state.weightsAvailable = [55, 45, 35, 25, 10, 5, 2.5]
                } else {
                    state.weightsAvailable = [45, 35, 25, 10, 5, 2.5]
                }
            }
        },
        changeDiscsType: (state, action) => {
            state.weightsList = []
            state.discsType = action.payload

            if (action.payload == 'calibrated') {
                if (state.weightUnit == 'kg') {
                    state.weightsAvailable = [25, 20, 15, 10, 5, 2.5, 1.25]
                } else {
                    state.weightsAvailable = [55, 45, 35, 25, 10, 5, 2.5]
                }
            } else {
                if (state.weightUnit == 'kg') {
                    state.weightsAvailable = [20, 15, 10, 5, 2.5, 1.25]
                } else {
                    state.weightsAvailable = [45, 35, 25, 10, 5, 2.5]
                }
            }
        },
        manualInputCalc: (state, action) => {
            let inputNumber = parseInt(action.payload) / 2 - 10

            if (state.discsType == 'calibrated') {
                state.weightsAvailable = [25, 20, 15, 10, 5, 2.5, 1.25];
            } else {
                state.weightsAvailable = [20, 15, 10, 5, 2.5, 1.25];
            }

            const weightsToPush = []

            state.weightsAvailable.sort((a, b) => b - a);

            for (let weight of state.weightsAvailable) {
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