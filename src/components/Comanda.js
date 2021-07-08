import React from 'react';



const Comanda = (comanda) => {
  return ( 
    <div>
    <p>comanda</p>
    {comanda.length > 0 ? 
    comanda.map((producto, index) => {
return(
  <div key={index}>
    <div>
  {producto.nombre}
    </div>
    Cantidad: {producto.cantidad}
  </div>
)
    })
    :
      <p> Aun no has agregado productos</p>
      }
    </div>

  );
}

export default Comanda;