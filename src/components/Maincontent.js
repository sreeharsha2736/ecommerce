import React from "react";
import Cards from "./Cards";
import Sidemenu from "./Sidemenu";

const Maincontent = () => {
  return (
    <>
      <div className="row">
        {/* <div className="col-2">
          <Sidemenu />
        </div> */}

        <div className="col-12">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Maincontent;
