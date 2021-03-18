import React from "react";
import card1 from "../images/1.jpg";
import card2 from "../images/2.jpg";
import card3 from "../images/3.jpg";
import card4 from "../images/5.jpg";
import "../main.css";

const Cards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 p-4">
          <div className="card ">
            <img src={card1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Denim Shirt</h5>
              <div className="row justify-content-around">
                <span className="card-text">Rs 999</span>
                <span className="">
                  <button className="btn btn-primary ">Buynow</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 p-4">
          <div className="card">
            <img src={card2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Denim Shirt</h5>
              <div className="row justify-content-around">
                <span className="card-text">Rs 999</span>
                <span className="">
                  <button className="btn btn-primary ">Buynow</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 p-4">
          <div className="card">
            <img src={card3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Denim Shirt</h5>
              <div className="row justify-content-around">
                <span className="card-text">Rs 999</span>
                <span className="">
                  <button className="btn btn-primary ">Buynow</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 p-4">
          <div className="card">
            <img src={card4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Denim Shirt</h5>
              <div className="row justify-content-around">
                <span className="card-text">Rs 999</span>
                <span className="">
                  <button className="btn btn-primary ">Buynow</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 p-4">
          <div className="card">
            <img src={card1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Denim Shirt</h5>
              <div className="row justify-content-around">
                <span className="card-text">Rs 999</span>
                <span className="">
                  <button className="btn btn-primary ">Buynow</button>
                </span>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="col-4 p-4">
          <div className="card">
            <img src={card2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Denim Shirt</h5>
              <div className="row justify-content-around">
                <span className="card-text">Rs 999</span>
                <span className="">
                  <button className="btn btn-primary ">Buynow</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
