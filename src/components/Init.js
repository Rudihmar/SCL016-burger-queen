import React from "react";
import Logo from "../img/logo_todo.png";
import { Link } from 'react-router-dom';


const Init = () => {
  return (
    <div className="container d-flex">
      <div className="row border">
        <div className="col-8">
          <img className="logo-home" src={Logo} alt="" />
        </div>
        <div className="col-4">
          <div className="row">
          <Link className="col buttonInit" to="/Tablets">MESERO</Link>
          <Link className="col buttonInit" to="/Kitchen">COCINA</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Init;
