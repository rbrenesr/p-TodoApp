import { useEffect } from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);
  // const  todos  = JSON.parse(localStorage.getItem('Todos')) || [];
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="rounded-circle">
      <div className="overflow-auto" style={{ height: 300 }}>
      
        <ul className="list-group">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
      </div>
     
    </>
  );
};
