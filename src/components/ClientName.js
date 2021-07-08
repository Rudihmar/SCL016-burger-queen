import React from "react";

const ClientName = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label>Nombre Cliente</label>
          <input className="form-control" type="text" name="name" />
        </div>
        <button className="btn btn-primary">Guardar</button>
      </form>
    </div>
  );
};

export default ClientName;
