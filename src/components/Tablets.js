import React from "react";
import { Link } from "react-router-dom";

const Tablets = () => (
<div className="container">  
    <div className="row" >
      <div className="col-4">
        <Link to="/Menu"> 1 </Link>
      </div>
      <div className="col-4">
        <Link to="/Menu"> 2 </Link>
      </div>
      <div className="col-4">
        <Link to="/Menu"> 3 </Link>
      </div>
      <div className="col-4">
        <Link to="/Menu"> 4 </Link>
      </div>
      <div className="col-4">
        <Link to="/Menu"> 5 </Link>
      </div>
      <div className="col-4">
        <Link to="/Menu"> 6 </Link>
      </div>
    </div>
</div>
);

export default Tablets;
