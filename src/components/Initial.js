import React, { Fragment } from "react";
import "../App.css";
import logo_todo from "../img/logo_todo.png";

const Initial = () => {
return (
<Fragment>
    <div class="row">
    <div class="col">
        <img claseName="logo-home" src={logo_todo} alt="" />
    </div>
        <div class="col order-5">
        <h2>¿Quien eres?</h2>
        <button>MESERO</button>
        <button>COCINA</button>
        </div>
     </div>
</Fragment>
);
};

export default Initial;
