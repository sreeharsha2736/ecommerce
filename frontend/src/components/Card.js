import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Card = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/products");
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="col-md-4  col-sm-6 p-5">
          <div className="card ">
            <img
              src={product.image}
              className="card-img-top "
              style={{ maxHeight: "280px", maxWidth: "330px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">{product.item}</h5>
              <div className="row justify-content-around">
                <span className="card-text">{product.amount}</span>
                <span className="">
                  <Link to={"/product/" + product.id} className="  ">
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
