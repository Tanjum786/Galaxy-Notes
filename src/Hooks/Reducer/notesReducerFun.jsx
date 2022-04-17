export const NotesReducer = (NotesState, NotesAction) => {
  const { NotesList, trashList, archiveList } = NotesState;
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
          (item) => item.id != NotesAction.payload.id
        ),
      };

    case "DELETE_FORM_TRASH":
      const Deletenote = trashList.filter(
        (item) => item.id != NotesAction.payload.id
      );
      return {
        ...NotesState,
        trashList: Deletenote,
      };
    case "RESTORE":
      return {
        ...NotesState,
        NotesList: [...NotesList, NotesAction.payload],
        trashList: trashList.filter(
          (item) => item.id != NotesAction.payload.id
        ),
      };
    case "MOVE_TO_ARCHIVE":
      return {
        ...NotesState,
        archiveList: [...archiveList, NotesAction.payload],
        NotesList: NotesList.filter(
          (item) => item.id != NotesAction.payload.id
        ),
      };
    case "MOVE_FROM_ARCHIVE":
      const DleteArchive= archiveList.filter(
          (item) => item.id != NotesAction.payload.id
        )
      return {
        ...NotesState,
        NotesList: [...NotesList, NotesAction.payload],
        archiveList:DleteArchive
      };
    case "DELETE_FROM_ARCHIVE":
      return {
        ...NotesState,
        archiveList: archiveList.filter(
          (item) => item.id != NotesAction.payload.id
        ),
      };

      
    default:
      return { ...NotesState };
  }
};
