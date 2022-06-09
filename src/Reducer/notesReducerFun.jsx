export const NotesReducer = (NotesState, NotesAction) => {
  switch (NotesAction.type) {
    case "ADD_NOTE":
      return {
        ...NotesState,
        notes: NotesAction.payload,
      };
    case "REMOVE_FROM_NOTES":
      return {
        ...NotesState,
        notes: NotesAction.payload,
      };

    case "Move_TO_TRASH":
      return {
        ...NotesState,
        trash: [...NotesState.trash, NotesAction.payload],
      };
    case "DELETE_FROM_TRASH":
      return {
        ...NotesState,
        trash: NotesAction.payload,
      };
    case "ADD_NOTE_ARCHIVE":
      return {
        ...NotesState,
        archiveList: NotesAction.payload,
      };
    case "REMOVE_NOTE_FROM_ARCHIVE":
      return {
        ...NotesState,
        archiveList: NotesAction.payload,
      };
    case "RESTOE_NOTE_FROM_ARCHIVE":
      return {
        ...NotesState,
        archiveList: NotesAction.payload,
      };
    case "EDIT_NOTES":
      return {
        ...NotesState,
        notes: NotesAction.payload,
      };
    case "PINED_NOTE":
      return{
        ...NotesState,
        pinList:NotesAction.payload
      }
    default:
      return { ...NotesState };
  }
};
