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
              <i class="fa-solid fa-book-open menu-icon"></i> Notes
            </p>
          </NavLink>
        </div>
        <div className="sub-menus">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            <p className="sub-menu-titel">
              <i className="menu-icon fa fa-house"></i> Home
            </p>
          </NavLink>
        </div>
        <div className="sub-menus">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            <p className="sub-menu-titel">
              <i className="menu-icon fa fa-tag"></i> Labels
            </p>
          </NavLink>
        </div>
        <div className="sub-menus">
          <NavLink
            to="/archive"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            <p className="sub-menu-titel">
              <i className="menu-icon fa fa-box-archive"></i> Archive
            </p>
          </NavLink>
        </div>
        <div className="sub-menus">
          <NavLink
            to="/trash"
            className={({ isActive }) => (isActive ? "active" : "not-active")}
          >
            <p className="sub-menu-titel">
              <i className="menu-icon fa fa-trash-can"></i> Trash
            </p>
          </NavLink>
        </div>
      </aside>
    </>
  );
};
