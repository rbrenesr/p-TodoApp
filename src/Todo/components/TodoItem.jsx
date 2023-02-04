export const TodoItem = ({ todo }) => {
  return (
    <>
      <li
        key={todo.id}
        className="list-group-item d-flex justify-content-between"
      >
        {todo.todo}
        <button className="btn btn-danger">Borrar</button>
      </li>
    </>
  );
};
