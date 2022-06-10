import React from "react";
import { useState } from "react";
import { CreateNote, Newnotecard, Sidebar } from "../../Components";
import { useNotes } from "../../context/Notes-context";
import "./note.css";

export const Notes = () => {
  const { NotesState } = useNotes();
  const { notes } = NotesState;
  const [createNote, setcreateNote] = useState(false);
  return (
    <>
      <div className="note-main-container dis_flex">
        <Sidebar />
        <div className="notePage-container dis_flex">
          <div>
            <div className="note-page-btn">
              {!createNote ? (
                <div className="btn-filter-container dis_flex">
                  <button
                    onClick={() => setcreateNote(!createNote)}
                    className="createnote-btn login_btn"
                  >
                    Create Note
                  </button>
                </div>
              ) : null}
              <h1 className="notetitle">My Notes: ({notes?.length})</h1>
            </div>
            {createNote ? <CreateNote setcreateNote={setcreateNote} /> : null}
            <>
              {notes.map((notesDetailes) => (
                <Newnotecard
                  notesDetailes={notesDetailes}
                  key={notesDetailes._id}
                  setcreateNote={setcreateNote}
                />
              ))}
            </>
          </div>
        </div>
      </div>
    </>
  );
};
