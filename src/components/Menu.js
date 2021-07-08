import React, { Fragment } from "react";
import Navbar from "./Navbar";
import ClientName from "./ClientName";
import Productos from "./Productos";
import Comanda from "./Comanda";
import { useState } from "react";





const Menu = ({productos}) => {
  const [comanda, cambiarComanda] = useState([]);

    return(
      <Fragment>
        <Navbar/>
        <ClientName/>
        <Productos productos={productos} />
        
        <Comanda comanda={comanda} />
        

      </Fragment>
    )
  }
  export default Menu;