import React from "react";
import Products from "../Products";
const Productscreen = (props) => {
  let product = Products.find((x) => x.id == props.match.params.id);
  let images = product.image;
  console.log(product);
  return (
    <>
      <div className="row pt-5">
        <img className="col-md-4" src={images} />

        <div className="col-md-4 pt-5 ">
          <div id="product-description" className="p-5">
            <div>
              <div className="">
                <h4 className=""> {product.item}</h4>
                <h5 className=""> Price : {product.amount}</h5>
                <h5 className=""> Ratings : 2.5 / 5</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 pt-5 ">
          <div id="" className="p-5">
            <div>
              <div className="">
                <h5 className=""> Price : {product.amount}</h5>
                <h5 className=""> Ratings : 2.5 / 5</h5>
                <p className=""> State : In stock</p>
              </div>
            </div>
            <div className=" ">
              <button className="btn btn-warning ">Buy Now</button>
            </div>
            <div className=" ">
              <button
                className="btn btn-danger
           "
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productscreen;
