import { TodoList, TodoAdd } from './components';

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
          <div className="col-sm-6 col-md-8">            
            <TodoList/>            
          </div>
          <div className="col-sm-6 col-md-4 text-center">
            <TodoAdd/>            
          </div>
        </div>
      </div>
    </>
  );
};
