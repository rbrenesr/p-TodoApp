import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);

  console.log(todos);

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
