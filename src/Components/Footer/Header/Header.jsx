import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="dis_flex header-container">
          <Link to="/">
            <h1 className="app-titel">
              Galaxy<span className="span-color">Notes</span>
            </h1>
          </Link>
          <Link to="/login">
            <button className="login_btn">Login</button>
          </Link>
        </div>
      </nav>
    </>
  );
};
