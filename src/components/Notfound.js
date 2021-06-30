import React from "react";
import arepa_triste from '../img/arepa_triste.png';

const NotFound = () => {
  return (
    <React.Fragment>
        <div className="NotFound">
            <img src={arepa_triste} alt="" />
        </div>
    </React.Fragment>
  );
};

export default NotFound;
