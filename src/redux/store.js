import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "./feature/todoSlice"

const store = configureStore({
    reducer: {
        todo: todoSlice
    }
})

export default store