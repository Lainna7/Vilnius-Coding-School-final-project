import React from "react";
import Kainos from "../../components/kainos/Kainos";

const Meniu = () => {
  return (
    <div className="container container-main container-md py-3">
      <div className="title">
        <h1>Išsirink savo skaniausią tortuką</h1>
      </div>
      <Kainos />
    </div>
  );
};

export default Meniu;
