import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "./feature/todoSlice"
import baseApi from "./baseApi"

const store = configureStore({
    reducer: {
        todo: todoSlice,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})

export default store