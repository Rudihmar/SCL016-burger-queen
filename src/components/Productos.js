import React from "react";
//PRODUCTOS

const Productos = ({ productos }) => {
  return (
    <div>
      <h3>PRODUCTOS</h3>
      <div>
        {productos.map((producto, index) => {
          return (
            <div key={index}>
              <p>{producto.nombre}</p>
              <button>Agregar al Carrito</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productos;
