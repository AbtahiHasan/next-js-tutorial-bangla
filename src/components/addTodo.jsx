"use client"

import axios from "axios";
import { useForm } from "react-hook-form";

const AddTodo = () => {
    const { handleSubmit, register, reset } = useForm()
    const addTodo = (data) => {
        console.log(data)
        axios.post("/api/todos", data)
            .then((res) => {
                if (res.data) {
                    alert("successfully")
                }
            })
    }
    return (
        <form onSubmit={handleSubmit(addTodo)} className="flex justify-center items-center mt-9">
            <input {...register("todo", { required: true })} className="outline-0 bg-transparent border rounded px-4  py-2" type="text" />
            <button type="submit" className="bg-indigo-700 px-4 py-2 rounded text-white">Add Todo</button>
        </form>
    );
};

export default AddTodo;