import React from "react";
import "./newnote.css";

export const Newnotecard = () => {
  return (
    <>
      <div className="newnote-container">
        <div className="labels-container">
          <p className="sub-label">Work</p>
          <p className="sub-label">Home</p>
          <div className="dis_flex pin-container">
            <button className="pin-btn">
              <i className="fa-solid fa-thumbtack pin-btn"></i>
            </button>
          </div>
        </div>

        <div className="notes-body">
          <h1>Title</h1>
          <h2>body of notes</h2>
          <span className="date">created on : 1/2/2021</span>
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
