import React, { Fragment } from "react";
import Navbar from "./Navbar";
import ClientName from "./ClientName";
import Productos from "./Productos";





const Menu = ({productos}) => {

    return(
      <Fragment>
        <Navbar/>
        <ClientName/>
        <Productos productos={productos} />

      </Fragment>
    )
  }
  export default Menu;