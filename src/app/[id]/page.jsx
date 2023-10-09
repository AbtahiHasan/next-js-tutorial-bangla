import getSingleTodo from '@/utils/getSingleTodo';
import getTodos from '@/utils/getTodos';
import React from 'react';

export const generateMetadata = async ({ params }) => {
    const todo = await getSingleTodo(params.id)
    return {
        title: todo.title
    }
}

export const generateStaticParams = async () => {
    const todos = await getTodos()
    return todos.map(({ id }) => ({
        id: id.toString()
    }))
}


const page = async ({ params }) => {
    const todo = await getSingleTodo(params.id)
    return (
        <div>
            {todo.title}
        </div>
    );
};

export default page;