import { addTodo } from "./";

export const starNewTodo = (todo) => {
  return (dispatch, getState) => {

    const tareas = getState().todo.todos;    

    dispatch(addTodo(todo));   
    
  };
};

/**
 *    
  const init = () => {
        return JSON.parse(localStorage.getItem('Todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);



    useEffect(() => {

        localStorage.setItem('Todos', JSON.stringify(todos));

    }, [todos])
 * 
 * / */
