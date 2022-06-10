import axios from "axios";
import toast from "react-hot-toast";
export const deleteFromtrash = async (notesDetailes, token, Notesdispatch) => {
  try {
    const response = await axios.delete(
      `/api/trash/delete/${notesDetailes._id}`,
      {
        headers: { authorization: token },
      }
    );
    if (response.status === 200) {
      Notesdispatch({
        type: "DELETE_FROM_TRASH",
        payload: response.data.trash,
      });
      toast.success("Note deleted from trash");
    }
  } catch (error) {
    toast.error(error.response.data.errors);
  }
};
