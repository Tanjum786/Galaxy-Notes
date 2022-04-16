export const NotesReducer = (NotesState, NotesAction) => {
  const {NotesList,trashList}= NotesState;
  switch (NotesAction.type) {
    case "ADD_NOTE":
      return {
        ...NotesState,
        NotesList: [...NotesList, NotesAction.payload],
      };
    case "MOVE_TO_TRASH":
      return {
        ...NotesState,
        trashList: [...trashList, NotesAction.payload],
        NotesList: NotesList.filter(
          (item) => item.notes.id != NotesAction.payload.notes.id
        ),
      };

    case "DELETE_FORM_TRASH":
      const Deletenote = trashList.filter(
        (item) => item.notes.id != NotesAction.payload.id
      );
      return {
        ...NotesState,
        trashList: Deletenote,
      };
    case "RESTORE":
      console.log(NotesAction.payload);
      return {
        ...NotesState,
        NotesList: [...NotesList, NotesAction.payload],
        trashList: trashList.filter(
          (item) => item.notes.id != NotesAction.payload.notes.id
        ),
      };

    default:
      return { ...NotesState };
  }
};
