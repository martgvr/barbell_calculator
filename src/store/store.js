import { configureStore } from "@reduxjs/toolkit"
import weightsReducer from './weightsListSlice'

export default configureStore({
    reducer: {
        weights: weightsReducer,
    },
})