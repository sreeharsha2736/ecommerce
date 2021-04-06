import React from "react";
import "../main.css";

const Topmenu = () => {
  return (
    <>
      <nav id="top-menu" className="navbar navbar-expand-md ">
        <div className=" ml-auto pr-5" id="navbarNav">
          <ul className="navbar-nav ">
            <li className=" active text-center">
              <a
                href="#"
                className="nav-link"
                id="home"
                style={{ textDecoration: "none" }}
              >
                Home
              </a>
            </li>
            <li className=" text-center">
              <a
                href="#"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                About
              </a>
            </li>

            <li className=" ">
              <a
                href="#"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Education
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Skills
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Projects
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Topmenu;
