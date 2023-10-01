const { createSlice } = require("@reduxjs/toolkit");

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {
        todos: ""
    },
    reducers: {}
})

export default todoSlice.reducer