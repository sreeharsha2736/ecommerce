import React from "react";
import { Link } from "react-router-dom";

import HomeDetails from "./HomeDetails";
const Card = () => {
  return (
    <>
      {HomeDetails.map((HomeDetail) => (
        <div className="col-md-4  col-sm-6 p-5">
          <div className="card ">
            <img
              src={HomeDetail.image}
              className="card-img-top "
              style={{ maxHeight: "280px", maxWidth: "330px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">{HomeDetail.item}</h5>
              <div className="row justify-content-around">
                <span className="card-text">{HomeDetail.amount}</span>
                <span className="">
                  <Link to={"/product/" + HomeDetail.id} className="  ">
                    Buynow
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}{" "}
    </>
  );
};

export default Card;
