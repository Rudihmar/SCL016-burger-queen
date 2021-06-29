// MANEJA CICLO DE VIDAS EVENTOS Y ESTADOS
import React, { Component } from "react";

class Stateful extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: "Hola Mundo Stateful"
        }
    }
    render() {
        return(
        <h1>(this.state.hello</h1>
        )
    }
};

export default Stateful;