import React from "react";
import { Link } from "react-router-dom";

import "../main.css";
import { FaShoppingCart } from "react-icons/fa";
const Nav = () => {
  return (
    <>
      <nav className=" ">
        <div className=" row">
          <span className=" col-10  ">
            <ul className="navbar-nav pt-2">
              <li className="pl-5 active">
                <Link
                  to="/"
                  className="nav-link"
                  id="home"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
            </ul>
          </span>
          <span className="col-2">
            <div className="d-flex   pt-3">
              <div className="">
                <Link to="/Signin">Login</Link>
              </div>
              <div className="pl-5 " style={{ fontSize: "24px" }}>
                <FaShoppingCart />
              </div>
            </div>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Nav;
