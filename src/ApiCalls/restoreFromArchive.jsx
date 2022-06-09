import axios from "axios";
import { toast } from "react-toastify";

export const restoreFromArchive = async (
  notesDetailes,
  token,
  Notesdispatch
) => {
  try {
    const response = await axios.post(
      `/api/archives/restore/${notesDetailes._id}`,
      {},
      { headers: { authorization: token } }
    );
    if (response.status === 200) {
      Notesdispatch({
        type: "RESTOE_NOTE_FROM_ARCHIVE",
        payload: response.data.archives,
      });
      Notesdispatch({ type: "ADD_NOTE", payload: response.data.notes });
      toast.success("Restored Note from archive");
    }
  } catch (error) {}
};
