import axios from "axios";
import toast from "react-hot-toast";

export const deleteNotes = async (notesDetailes, token, Notesdispatch) => {
  try {
    const response = await axios.delete(
      `api/notes/${notesDetailes._id}`,
      { headers: { authorization: token } }
    );
    if (response.status === 200) {
      Notesdispatch({
        type: "REMOVE_FROM_NOTES",
        payload: response.data.notes,
      });
      toast.success("sucessfully deleted the note")
      Notesdispatch({ type: "Move_TO_TRASH", payload: notesDetailes });
    }
  } catch (error) {
    toast.error("somthing went wrong")
  }
};
