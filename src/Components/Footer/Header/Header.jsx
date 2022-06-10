import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";
import toast from "react-hot-toast";

export const Header = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("users");
  const users = JSON.parse(user);
  const navigate = useNavigate();
  const { AuthDispatch } = useAuth();

  const logoutHandler = () => {
    localStorage.removeItem("users");
    localStorage.removeItem("token");
    navigate("/");
    AuthDispatch({ type: "LOGOUT" });
    toast.success("logedout successfully");
  };
  return (
    <>
      <nav className="nav-bar">
        <div className="dis_flex header-container">
          <Link to="/">
            <h1 className="app-titel">
              Galaxy<span className="span-color">Notes</span>
            </h1>
          </Link>
          <div className="dis_flex login-container">
            {token && user ? (
              <button className="login_btn logout-btn" onClick={logoutHandler}>
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="login_btn">Login</button>
              </Link>
            )}

            <div>
             {token && user ? <div className="dis_flex user-icon-container">
                <i className="user-icons fas fa-circle-user"></i>
              <span>

              {users.firstName}
              </span>
              </div>:null}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
