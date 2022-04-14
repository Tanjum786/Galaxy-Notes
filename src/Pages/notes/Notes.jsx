import React from "react";
import { Newnotecard } from "../../Components/NewNotecard/Newnotecard";
import { CreateNote } from "../../Components/NoteEdit/CreateNote";
import { Sidebar } from "../../Components/SideBar.jsx/Sidebar";
import "./note.css";

export const Notes = () => {
  return (
    <>
      <div className="note-main-container dis_flex">
        <Sidebar />
        <div className="notePage-container dis_flex">
          <div>
            <h1 className="title">Crate Notes:</h1>
            <CreateNote/>
            <h1 className="title">My Notes: (0)</h1>
                <Newnotecard/>
          </div>
        </div>
      </div>
    </>
  );
};
