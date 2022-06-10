import axios from "axios";
import toast from "react-hot-toast";

export const archiveNotes = async (notesDetailes, token, Notesdispatch) => {
  try {
    const response = await axios.post(
      `/api/notes/archives/${notesDetailes._id}`,
      { notesDetailes },
      { headers: { authorization: token } }
    );
    if (response.status === 201) {
      Notesdispatch({
        type: "ADD_NOTE_ARCHIVE",
        payload: response.data.archives,
      });
      Notesdispatch({
        type: "REMOVE_FROM_NOTES",
        payload: response.data.notes,
      });
      toast.success("Note Add to Archive");
    }

  } catch (error) {
    toast.error(error.response.data.errors)

  }
};
