import getSingleTodo from "@/utils/getSingleTodo";


const singleTodo = async ({ params }) => {
    console.log(params)
    const todo = await getSingleTodo(params.id)
    console.log(todo)

    return (
        <div>
            <h3>{todo?.title}</h3>
        </div>
    );
};

export default singleTodo;