import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Tablets = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="contenedorMesas">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="buttonTable">
            <Link className="tableNumber" to="/Menu">
              Mesa {i}{" "}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tablets;
