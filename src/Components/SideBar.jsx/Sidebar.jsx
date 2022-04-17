import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <>
      <aside className="sidebar-container">
        <Link to="/notes">
          <button className="login_btn btn_style">
            Notes
          </button>
        </Link>
        <div className="sub-menus">
          <Link to="/">
            <p className="sub-menu-titel">
              <i className="menu-icon fa fa-house"></i> Home
            </p>
          </Link>
        </div>
        <div className="sub-menus">
          <Link to="">
            <p className="sub-menu-titel">
              <i className="menu-icon fa fa-tag"></i> Labels
            </p>
          </Link>
        </div>
        <div className="sub-menus">
          <Link to="/archive">
            <p className="sub-menu-titel">
              <i className="menu-icon fa fa-box-archive"></i> Archive
            </p>
          </Link>
        </div>
        <div className="sub-menus">
          <Link to="/trash">
            <p className="sub-menu-titel">
              <i className="menu-icon fa fa-trash-can"></i> Trash
            </p>
          </Link>
        </div>
        <div className="sub-menus">
          <Link to="">
            <p className="sub-menu-titel">
              <i className="menu-icon fas fa-circle-user"></i> Profile
            </p>
          </Link>
        </div>
      </aside>
    </>
  );
};
