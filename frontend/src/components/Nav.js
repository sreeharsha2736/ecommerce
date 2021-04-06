import React from "react";
import { Link } from "react-router-dom";

import "../main.css";
import { FaShoppingCart } from "react-icons/fa";
const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md ">
        <div className="  " id="navbarNav">
          <ul className="navbar-nav   my-lg-0">
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
          <div className="d-flex  ml-auto ">
            <div className="">
              <Link to="/Signin">Login</Link>
            </div>
            <div className="pl-5 " style={{ fontSize: "24px" }}>
              <FaShoppingCart />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
