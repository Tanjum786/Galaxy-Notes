import React from "react";
import { BsPin } from "react-icons/bs";
import { deleteFromArchive, restoreFromArchive } from "../../ApiCalls";
import { Colorpalette, Sidebar } from "../../Components";
import { useNotes, usePaltte } from "../../context";

export const Archive = () => {
  const { Notesdispatch, NotesState, setnotes } = useNotes();
  const { archiveList } = NotesState;
  const { toggelColors, setToggelColors } = usePaltte();
  const token = localStorage.getItem("token");
  const colorchangeHandler = (notesDetailes, color) => {
    setnotes({ ...notesDetailes, bgColor: (notesDetailes.bgColor = color) });
  };
  return (
    <>
      <div className="note-main-container dis_flex ">
        <Sidebar />
        <div className="notePage-container dis_flex">
          <div className="trash-container">
            {archiveList?.length > 0 ? (
              <>
                <h1 className="notetitle">
                  {` You Have ${archiveList?.length} Notes in Archive`}
                </h1>
                {archiveList?.map((notesDetailes) => {
                  const { priority, title, label, date, notebody, _id } =
                    notesDetailes;
                  return (
                    <div
                      className="newnote-container"
                      style={{ backgroundColor: notesDetailes.bgColor }}
                      key={_id}
                    >
                      <div className="labels-container">
                        <p className="sub-label">{priority}</p>
                        <p className="sub-label">{label}</p>
                        <div className="dis_flex pin-container">
                          <BsPin
                            className="pin-btn"
                            size="4rem"
                          />
                        </div>
                      </div>
                      <hr />
                      <div className="notes-body">
                        <h1>Title : {title}</h1>
                        <span
                          dangerouslySetInnerHTML={{ __html: notebody }}
                        ></span>
                        <span className="date">created on: {date}</span>
                      </div>

                      <div className="editing-tools dis_flex">
                        <button
                          className="tool-btns"
                          onClick={() =>
                            setToggelColors((prevcolor) => !prevcolor)
                          }
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
                          onClick={() =>
                            restoreFromArchive(
                              notesDetailes,
                              token,
                              Notesdispatch
                            )
                          }
                        >
                          <i className="fa-solid fa-box-open tool-icon"></i>
                        </button>
                        <button
                          className="tool-btns"
                          onClick={() =>
                            deleteFromArchive(
                              notesDetailes,
                              token,
                              Notesdispatch
                            )
                          }
                        >
                          <i className="tool-icon fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <h1 className="notetitle">Archive is Empty</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
