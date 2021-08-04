import React, { Fragment } from "react";
import Navbar from "./Navbar";
import ClientName from "./ClientName";
import Productos from "./Productos";





const Menu = ({productos, agregarProductoAComanda}) => {
  

    return(
      <Fragment>
        <Navbar/>
        <ClientName/>

        <Productos 
        productos={productos}
        agregarProductoAComanda={agregarProductoAComanda}/>
        
        
        
        
        

      </Fragment>
    )
  }
  export default Menu;