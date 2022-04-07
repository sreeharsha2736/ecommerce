import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";
import "../main.css";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Nav = (props) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  };
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
                  MyEcommerce-Home
                </Link>
              </li>
            </ul>
          </span>
          <span className="col-2">
            <div className="d-flex   pt-3">
              {userInfo ? (
                <div>
                  <Link to="/profile">{userInfo.name}</Link>
                  <button onClick={() => handleLogout()}>
                    {" "}
                    <Link to="/logout">Logout </Link>
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/signin">Sign In</Link>{" "}
                </>
              )}
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
