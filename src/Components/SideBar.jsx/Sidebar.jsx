import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <>
      <aside className="sidebar-container">
        <div className="sub-menus">
          <NavLink
            to="/notes"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            <p className="sub-menu-titel">
              <i className="fa-solid fa-book-open menu-icon"></i>
              <span className="span" >Notes</span>
            </p>
          </NavLink>
        </div>
        <div className="sub-menus">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            <p className="sub-menu-titel">
              <i className="menu-icon fa fa-house"></i>
              <span className="span" >Home</span>
            </p>
          </NavLink>
        </div>
        <div className="sub-menus">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            <p className="sub-menu-titel">
              <i className="menu-icon fa fa-tag"></i> 
              <span className="span" >Labels</span>

            </p>
          </NavLink>
        </div>
        <div className="sub-menus">
          <NavLink
            to="/archive"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            <p className="sub-menu-titel">
              <i className="menu-icon fa fa-box-archive"></i> 
              <span className="span" >Archive</span>

            </p>
          </NavLink>
        </div>
        <div className="sub-menus">
          <NavLink
            to="/trash"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            <p className="sub-menu-titel">
              <i className="menu-icon fa fa-trash-can"></i> 
              <span className="span" >Trash</span>

            </p>
          </NavLink>
        </div>
      </aside>
    </>
  );
};
