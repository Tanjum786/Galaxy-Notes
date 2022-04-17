import React from "react";
import { Sidebar } from "../../Components/SideBar.jsx/Sidebar";
import { useNotes } from "../../Hooks/context/Notes-context";

export const Trash = () => {
  const { Notesdispatch, NotesState } = useNotes();
  const { trashList } = NotesState;

  return (
    <>
      <div className="note-main-container dis_flex ">
        <Sidebar />
        <div className="notePage-container dis_flex">
          <div className="trash-container">
            {trashList.length > 0 ? (
              <>
                <h1 className="notetitle">
                  {` You Have ${trashList.length} Items in Trash`}
                </h1>
                {trashList.map((notesDetailes) => {
                  const {
                    priority, title, label, date, notebody, id 
                  } = notesDetailes
                  return (
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
                        <h1>Title : {title}</h1>
                        <span dangerouslySetInnerHTML={{ __html: notebody }}></span>
                        <span className="date">created on: {date}</span>
                      </div>

                      <div className="editing-tools dis_flex">
                        <button
                          className="tool-btns"
                          onClick={() =>
                            Notesdispatch({
                              type: "RESTORE",
                              payload: notesDetailes,
                            })
                          }
                        >
                          <i class="fa-solid fa-arrow-rotate-left tool-icon"></i>
                        </button>
                        <button
                          className="tool-btns"
                          onClick={() =>
                            Notesdispatch({
                              type: "DELETE_FORM_TRASH",
                              payload: { id: id },
                            })
                          }
                        >
                          <i class="fa-solid fa-trash tool-icon"></i>
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
