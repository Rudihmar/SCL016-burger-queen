import React from "react";
//PRODUCTOS

const Productos = ({ productos, agregarProductoAComanda }) => {
  return (
    <div>
      <h3>PRODUCTOS</h3>
      <div>
        {productos.map((producto, index) => {
          return (
            <div key={index}>
              <p>{producto.nombre}</p>
              <button onClick={() => agregarProductoAComanda(producto.id, producto.nombre)}>Agregar</button>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Productos;
