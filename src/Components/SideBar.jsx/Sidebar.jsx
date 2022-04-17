import React from "react";
import { Link } from "react-router-dom";
import { useNotes } from "../../Hooks/context";
import "./Sidebar.css";

export const Sidebar = () => {
  const {NotesState}=useNotes();
  const {trashList,archiveList}=NotesState
  return (
    <>
      <aside className="sidebar-container">
      <div className="sub-menus">
        <Link to="/notes">
          <p className="sub-menu-titel">
          <i class="fa-solid fa-book-open menu-icon"></i> Notes
          </p>
        </Link>
          </div>
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
            <span className="note-badge">{archiveList.length}</span>  
              <i className="menu-icon fa fa-box-archive"></i> Archive
            </p>
          </Link>
        </div>
        <div className="sub-menus">
          <Link to="/trash">
            <p className="sub-menu-titel">
            <span className="note-badge">{trashList.length}</span>  
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
