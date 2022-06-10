import axios from "axios";
import toast from "react-hot-toast";

export const editNotes = async (note, token, Notesdispatch) => {
  try {
    const response = await axios.post(
      `/api/notes/${note._id}`,
      { note },
      { headers: { authorization: token } }
    );
    if (response.status === 201) {
      Notesdispatch({ type: "EDIT_NOTES", payload: response.data.notes });
      toast.success("Note edited successfully");
    }
    console.log(response)
  } catch (error) {
    toast.error(error.response.data.errors);
  }
};
