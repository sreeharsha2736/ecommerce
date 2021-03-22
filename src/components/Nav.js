import React from "react";
import { Link } from "react-router-dom";

import "../main.css";
import { FaShoppingCart } from "react-icons/fa";
const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md p-1">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse  " id="navbarNav">
          <ul className="navbar-nav me-auto  my-lg-0">
            <li className="pl-5 active">
              <a
                href="#"
                className="nav-link"
                id="home"
                style={{ textDecoration: "none" }}
              >
                <Link to="/">Home</Link>
              </a>
            </li>
            <li className="pl-5">
              <a
                href="#"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Appliances
              </a>
            </li>

            <li className="pl-5">
              <a
                href="#"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Electronics
              </a>
            </li>
            <li className="pl-5">
              <a
                href="#"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Clothing
              </a>
            </li>
            <li className="pl-5">
              <a
                href="#"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Toys
              </a>
            </li>
            <li className="pl-5">
              <a
                href="#"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Kids
              </a>
            </li>
          </ul>
          <form className="d-flex pl-5">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            <div className="pl-5">
              <Link to="/Signin">Login</Link>
            </div>
            <div className="pl-5 " style={{ fontSize: "24px" }}>
              <FaShoppingCart />
            </div>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Nav;
