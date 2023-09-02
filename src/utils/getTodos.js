import axios from 'axios';
import React from 'react';

const getTodos = async () => {
    const data = await axios.get("/api/todos")

    // console.log(6, data)
    return data.data
};

export default getTodos;