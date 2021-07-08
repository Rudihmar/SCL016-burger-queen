import React from "react";
import { Link } from "react-router-dom";
import Back from "../img/back.png";
import Logo from '../img/logo_todo.png';
import Alerta from '../img/notificacion_limpia.png';

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
          <Link className="navbarImg" to="/" ><img src={Back} alt="back" /></Link>
          <img className="navbarImg" src={Logo} alt="logo" />
          <Link className="navbarImg" to="/" ><img src={Alerta} alt="back" /></Link> 
      </div>
    </React.Fragment>
  );
};

export default Navbar;

