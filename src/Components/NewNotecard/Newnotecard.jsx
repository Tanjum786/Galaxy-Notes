import React from "react";
import { useNotes, usePaltte } from "../../context";
import { Colorpalette } from "../ColorPalette/Colorpalette";
import "./newnote.css";

export const Newnotecard = ({ notesDetailes }) => {
  const { priority, label, title, notebody, id } = notesDetailes;

  const { Notesdispatch, notesObj,setnotes } = useNotes();
  const {toggelColors,setToggelColors}=usePaltte()

  const colorchangeHandler=((notesDetailes,color)=>{
    setnotes({...notesDetailes,bgColor:(notesDetailes.bgColor=color)})
    setnotes({...notesObj})
  })

  return (
    <>
      <div className="newnote-container" style={{backgroundColor:notesDetailes.bgColor}}>
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
          <button className="tool-btns">
            <i className="tool-icon fa-solid fa-pen-to-square"></i>
          </button>
          <button
            className="tool-btns"
            onClick={() =>
              Notesdispatch({ type: "MOVE_TO_ARCHIVE", payload: notesDetailes })
            }
          >
            <i className="tool-icon fa-solid fa-box-archive"></i>
          </button>

          <button
            className="tool-btns"
            onClick={() => {
              Notesdispatch({
                type: "MOVE_TO_TRASH",
                payload: notesDetailes,
              });
            }}
          >
            <i className="tool-icon fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </>
  );
};
