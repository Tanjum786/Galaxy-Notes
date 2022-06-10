
import axios from "axios";
import toast from "react-hot-toast";

 const addNewNotes = async (note, token, Notesdispatch) => {
  try {
    const response = await axios.post(
      "/api/notes",
      { note },
      { headers: { authorization: token } }
    );
    if (response.status === 201) {
      toast.success("successfully added new note");
      Notesdispatch({ type: "ADD_NOTE", payload: response.data.notes });
    }
  } catch (error) {
    toast.error("somthing went wrong");
  }
};

export{addNewNotes}


