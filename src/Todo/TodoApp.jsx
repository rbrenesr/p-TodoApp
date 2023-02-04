import { TodoList } from './components';
import { TodoAdd } from './components/TodoAdd';

export const TodoApp = () => {

  return (
    <>
      <div className="container-fluid" data-bs-theme="dark">
        <div className="row">
          <hr />
          <div className="col-12 col-sm-8 d-flex justify-content-start">
            <h1>Todo App</h1>
          </div>
          <div className="col-12 col-sm-4 d-flex justify-content-end">
            <h6>rbrenesr</h6>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-7">            
            <TodoList/>            
          </div>
          <div className="col-5 text-center">
            <h4>Agregar TODO</h4>
            <hr />
            <TodoAdd/>
          </div>
        </div>
      </div>
    </>
  );
};
