import React from "react";
import "./newnote.css";

export const Newnotecard = ({ notesDetailes }) => {
  const {notes:{priority,label,title,notebody,date}}=notesDetailes
  return (
    <>
      <div className="newnote-container">
        <div className="labels-container">
          <p className="sub-label">{priority}</p>
          <p className="sub-label">{label}</p>
          <div className="dis_flex pin-container">
            <button className="pin-btn">
              <i className="fa-solid fa-thumbtack pin-btn"></i>
            </button>
          </div>
        </div>
        <hr />
        <div className="notes-body">
          <h1>{title}</h1>
          <p
            dangerouslySetInnerHTML={{ __html: notebody }}
          ></p>
          <span className="date">created on: {date}</span>
        </div>

        <div className="editing-tools dis_flex">
          <button className="tool-btns">
            <i className="tool-icon fa-solid fa-palette"></i>
          </button>
          <button className="tool-btns">
            <i className="tool-icon fa-solid fa-pen-to-square"></i>
          </button>
          <button className="tool-btns">
            <i className="tool-icon fa-solid fa-box-archive"></i>
          </button>

          <button className="tool-btns">
            <i className="tool-icon fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </>
  );
};
