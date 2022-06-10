import axios from "axios";
import toast from "react-hot-toast";

export const restoreFromTrash = async (notesDetailes, token, Notesdispatch) => {
  try {
    const response = await axios.post(
      `/api/trash/restore/${notesDetailes._id}`,
      {},
      { headers: { authorization: token } }
    );
    if (response.status === 200) {
      Notesdispatch({
        type: "DELETE_FROM_TRASH",
        payload: response.data.trash,
      });
      Notesdispatch({ type: "ADD_NOTE", payload: response.data.notes });
      toast.success("Note successfully restored");
    }
  } catch (error) {
    toast.error(error.response.data.errors);
  }
};
