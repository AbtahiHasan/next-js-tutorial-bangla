"use client"
import getTodos from "@/utils/getTodos";

const HomePage = async () => {
  const todos = await getTodos()
  // console.log(todos)
  return (
    <div>
      {
        todos && todos.map(todo => {
          const { title } = todo
          return (
            <div>
              <h3>{title}</h3>
            </div>
          )
        })
      }
    </div>
  );
};

export default HomePage;