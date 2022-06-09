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
    bgColor:'#fffff',
    isediting: false,
    date: new Date().toLocaleString(),
  }
  const [note, setnotes] = useState(notesObj);
  const [NotesState, Notesdispatch] = useReducer(NotesReducer, {
    notes: [],
    trash: [],
    archiveList: [],
  });

  return (
    <Notescontext.Provider
      value={{ note, NotesState, setnotes, Notesdispatch ,notesObj}}
    >
      {children}
    </Notescontext.Provider>
  );
};

const useNotes = () => useContext(Notescontext);
export { useNotes, NotesProvider };
