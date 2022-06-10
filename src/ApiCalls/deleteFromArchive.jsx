import axios from "axios";
import toast from "react-hot-toast";

export const deleteFromArchive = async (
  notesDetailes,
  token,
  Notesdispatch
) => {
  try {
    const response = await axios.delete(
      `/api/archives/delete/${notesDetailes._id}`,
      { headers: { authorization: token } }
    );
    if (response.status === 200) {
      Notesdispatch({
        type: "REMOVE_NOTE_FROM_ARCHIVE",
        payload: response.data.arcives,
      });
      Notesdispatch({ type: "Move_TO_TRASH", payload: notesDetailes });
      toast.success("Note removed from Archive")
    }
  } catch (error) {
      toast.error(error.response.data.errors)
  }
};
