import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../actions/productActions";
const Productscreen = (props) => {
  const productDetails = useSelector((state) => state.productDetails);
  const [qty, setQty] = useState(1);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {};
  }, []);
  console.log(product);
  return loading ? (
    "...loading"
  ) : error ? (
    { error }
  ) : (
    <>
      <div className="row pt-5">
        <img src={product.image} className="col-md-4" />

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
                Qty :
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
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
