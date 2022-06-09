import React from "react";
import { BsPin } from "react-icons/bs";
import { deleteFromtrash, restoreFromTrash } from "../../ApiCalls";
import { Sidebar } from "../../Components/SideBar.jsx/Sidebar";
import { useNotes } from "../../context/Notes-context";

export const Trash = () => {
  const { Notesdispatch, NotesState } = useNotes();
  const { trash } = NotesState;
  const token = localStorage.getItem("token");

  return (
    <>
      <div className="note-main-container dis_flex ">
        <Sidebar />
        <div className="notePage-container dis_flex">
          <div className="trash-container">
            {trash?.length > 0 ? (
              <>
                <h1 className="notetitle">
                  {` You Have ${trash?.length} Items in Trash`}
                </h1>
                {trash?.map((notesDetailes) => {
                  const { priority, title, label, date, notebody, _id } =
                    notesDetailes;
                  return (
                    <div className="newnote-container" key={_id}>
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
                            restoreFromTrash(
                              notesDetailes,
                              token,
                              Notesdispatch
                            )
                          }
                        >
                          <i className="fa-solid fa-arrow-rotate-left tool-icon"></i>
                        </button>
                        <button
                          className="tool-btns"
                          onClick={() =>
                            deleteFromtrash(notesDetailes, token, Notesdispatch)
                          }
                        >
                          <i className="fa-solid fa-trash tool-icon"></i>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <h1 className="notetitle">Your Trash is Empty</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
