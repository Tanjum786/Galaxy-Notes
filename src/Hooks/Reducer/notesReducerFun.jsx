export const NotesReducer = (NotesState, NotesAction) => {
  switch (NotesAction.type) {
    case "ADD_NOTE":
      return {
        ...NotesState,
        NotesList: [...NotesState.NotesList, NotesAction.payload],
      };

    default:
      return { ...NotesState };
  }
};
