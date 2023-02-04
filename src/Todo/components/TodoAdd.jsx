export const TodoAdd = () => {
  return (
    <>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        name="todoDescripcion"
        className="form-control mt-3 mt-md-0"
      />
      <button className="btn btn-outline-primary col-12 mt-3">Agregar</button>
      
    </>
  );
};
