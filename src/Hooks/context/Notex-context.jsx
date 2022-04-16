import { createContext, useContext, useReducer,useState } from "react";
import {NotesReducer} from '../Reducer/notesReducerFun';
const Notescontext = createContext();
import { v4 as uuid } from "uuid";


const NotesProvider = ({ children }) => {
  
    const notesObj={
    id:uuid(),
    label: "",
    title: "",
    priority: "",
    notebody:'',
    edit: false,
    pinnote: false,
    date: new Date().toLocaleString(),
  }
  const [notes, setnotes] = useState(notesObj);
  const [NotesState, Notesdispatch] = useReducer(NotesReducer, {
    NotesList: [],
    trashList: [],
    archiveList: [],
    pinList: [],
  });

  return (
    <Notescontext.Provider
      value={{ notes, NotesState, setnotes, Notesdispatch ,notesObj}}
    >
      {children}
    </Notescontext.Provider>
  );
};

const useNotes = () => useContext(Notescontext);
export { useNotes, NotesProvider };
