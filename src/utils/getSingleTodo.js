import axios from "axios";

const getSingleTodo = async (id) => {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    // const todo = await res.json()
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    console.log(res)
    return res.data
};

export default getSingleTodo;