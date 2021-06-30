import React, { Fragment } from "react";
import logo_todo from "../img/logo_todo.png";
import { Link } from 'react-router-dom';

const Init = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <img className="logo-home" src={logo_todo} alt="" />
        </div>
        <div className="col order-5">
          <h2>¿Quien eres?</h2>
          <Link className="btn btn-dark" to="/Tablets">MESERO</Link>
          <Link className="btn btn-dark" to="/Kitchen">COCINA</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Init;
