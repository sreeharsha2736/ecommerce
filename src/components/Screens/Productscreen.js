import React from "react";
import HomeDetails from "../HomeDetails";
const Productscreen = (props) => {
  let product = HomeDetails.find((x) => x.id == props.match.params.id);
  let images = ".." + product.image;
  console.log(product);
  return (
    <>
      <div>
        <img src={images} />
        <div className="pl-5">
          <h4 className="pl-5"> {product.item}</h4>
        </div>
        <div className=" pl-5 ml-5">
          <button className="btn btn-warning ">Buy Now</button>
        </div>
        <div className=" pl-5 ml-5">
          <button
            className="btn btn-danger
           "
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Productscreen;
