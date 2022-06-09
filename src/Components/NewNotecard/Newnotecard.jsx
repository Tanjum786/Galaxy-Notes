import React from "react";
import { BsPinFill, BsPin } from "react-icons/bs";
import { useState } from "react";
import { archiveNotes, deleteNotes } from "../../ApiCalls";
import { useNotes, usePaltte } from "../../context";
import "./newnote.css";
import { Colorpalette } from "../ColorPalette/Colorpalette";

export const Newnotecard = ({ notesDetailes, setcreateNote }) => {
  const [isPin,setIspin]=useState(false)
  const { priority, label, title, notebody } = notesDetailes;
  const token = localStorage.getItem("token");
  const { Notesdispatch, notesObj, setnotes } = useNotes();
  const { toggelColors, setToggelColors } = usePaltte();

  const colorchangeHandler = (notesDetailes, color) => {
    setnotes({ ...notesDetailes, bgColor: (notesDetailes.bgColor = color) });
    setnotes({ ...notesObj });
  };
  const editNotesHandle = (notesDetailes) => {
    setnotes({ ...notesDetailes, isediting: (notesDetailes.isediting = true) });
    setcreateNote(true);
  };

  const pinNoteHandler=(()=>{
    setIspin(!isPin)
  })
  return (
    <>
      <div
        className="newnote-container"
        style={{ backgroundColor: notesDetailes.bgColor }}
      >
        <div className="labels-container">
          <p className="sub-label">{priority}</p>
          <p className="sub-label">{label}</p>
          <button className="dis_flex pin-container" onClick={pinNoteHandler}>
            {isPin ? (
              <BsPinFill size="4rem" className="pin-btn" />
            ) : (
              <BsPin size="4rem" className="pin-btn" />
            )}
          </button>
        </div>
        <hr />
        <div className="notes-body">
          <h1>Title : {title}</h1>
          <span dangerouslySetInnerHTML={{ __html: notebody }}></span>
          <span className="date">created on: {notesObj.date}</span>
        </div>

        <div className="editing-tools dis_flex">
          <button
            className="tool-btns"
            onClick={() => setToggelColors((prevColor) => !prevColor)}
          >
            <i className="tool-icon fa-solid fa-palette"></i>
            {toggelColors && (
              <Colorpalette
                colorPalettecolors={(color) =>
                  colorchangeHandler(notesDetailes, color)
                }
              />
            )}
          </button>
          <button
            className="tool-btns"
            onClick={() => editNotesHandle(notesDetailes)}
          >
            <i className="tool-icon fa-solid fa-pen-to-square"></i>
          </button>
          <button
            className="tool-btns"
            onClick={() => archiveNotes(notesDetailes, token, Notesdispatch)}
          >
            <i className="tool-icon fa-solid fa-box-archive"></i>
          </button>

          <button
            className="tool-btns"
            onClick={() => deleteNotes(notesDetailes, token, Notesdispatch)}
          >
            <i className="tool-icon fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </>
  );
};
