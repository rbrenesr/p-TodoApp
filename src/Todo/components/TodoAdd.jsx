import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useForm } from "../../Hooks";
import { starNewTodo } from "../../Store/Todo";

const formData = {
  id: "",
  todoDesc: "",
  done: false,
};

export const TodoAdd = () => {
  const { todoDesc, onInputChange, onResetForm, formState } = useForm(formData);
  const { messageSaved, isSaving, todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const onAddTodo = (event) => {
    event.preventDefault();

    if (todoDesc.length <= 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe ingresar una tarea!",
      });

      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      todo: todoDesc,
      done: false,
    };

    dispatch(starNewTodo(newTodo));
    Swal.fire("Nueva Tarea", "Tarea ingresado correctamente", "success");
  };

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <form onSubmit={onAddTodo}>
        <input
          type="text"
          placeholder="¿Qué hay que hacer?"
          className="form-control mt-3 mt-md-0"
          name="todoDesc"
          value={todoDesc}
          onChange={onInputChange}
        />
        <button className="btn btn-outline-primary col-12 mt-3" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};
