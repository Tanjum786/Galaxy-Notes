import React from "react";
import { Newnotecard } from "../../Components/NewNotecard/Newnotecard";
import { CreateNote } from "../../Components/NoteEdit/CreateNote";
import { Sidebar } from "../../Components/SideBar.jsx/Sidebar";
import { useNotes } from "../../Hooks/context/Notes-context";
import "./note.css";

export const Notes = () => {
  const { NotesState} = useNotes();
  const { NotesList } = NotesState;
  return (
    <>
      <div className="note-main-container dis_flex">
        <Sidebar />
        <div className="notePage-container dis_flex">
          <div>
            <h1 className="notetitle">Crate Notes:</h1>
            <CreateNote />
            <h1 className="notetitle">My Notes: ({NotesList.length})</h1>

              <>
                {NotesList.map((notesDetailes) => (
                  <Newnotecard notesDetailes={notesDetailes}/>
                ))}
              </>
            
          </div>
        </div>
      </div>
    </>
  );
};
