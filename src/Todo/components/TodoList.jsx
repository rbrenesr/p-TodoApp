import { useEffect } from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);
  // const  todos  = JSON.parse(localStorage.getItem('Todos')) || [];

  console.log(todos);

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);



  return (
    <>

    <div className="overflow-auto" style={{height:400}}>
    <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>

      
    </>
  );
};
