import React from "react";
import ReactQuill from "react-quill";
import "./notecard.css";
import "react-quill/dist/quill.snow.css";
import { useNotes } from "../../context/Notes-context";
import { addNewNotes, editNotes } from "../../ApiCalls";
import { BsFillXCircleFill } from "react-icons/bs";
export const CreateNote = ({ setcreateNote }) => {
  const { note, setnotes, Notesdispatch, notesObj } = useNotes();
  const token = localStorage.getItem("token");

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "indent",
  ];
  const ChangeHandler = (e) => {
    setnotes({ ...note, [e.target.name]: e.target.value });
  };
  const NotesubmitHandler = (e) => {
    e.preventDefault();
    note.isediting
      ? editNotes(note, token, Notesdispatch)
      : addNewNotes(note, token, Notesdispatch);
    setnotes({ ...notesObj });
    setcreateNote(false);
  };
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ header: 1 }, { header: 2 }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],

      ["clean"],
    ],
  };

  return (
    <>
      <form type="reset" onSubmit={(e) => NotesubmitHandler(e)}>
        <div className="dis_flex main-noteCard-container">
          <div className="newNote-container">
            <div className="input-container dis_flex">
              <div className="title-container">
                <p className="titel-label">
                  Title<small className="star_color">*</small>
                </p>
                <input
                  className="input-filed"
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter a title"
                  value={note.title}
                  onChange={(e) => ChangeHandler(e)}
                  required
                />
              </div>
              <p className="titel-label">
                Labels<small className="star_color">*</small>
              </p>
              <div className="label-container dis_flex">
                <label htmlFor="home">
                  <input
                    type="radio"
                    name="label"
                    id="home"
                    value="home"
                    onChange={(e) => ChangeHandler(e)}
                    checked={note.label === "home"}
                    required
                  />
                  Home
                </label>
                <label htmlFor="work">
                  <input
                    type="radio"
                    name="label"
                    id="work"
                    value="work"
                    onChange={(e) => ChangeHandler(e)}
                    checked={note.label === "work"}
                    required
                  />
                  Work
                </label>
                <label htmlFor="exercise">
                  <input
                    type="radio"
                    name="label"
                    id="exercise"
                    value="exercise"
                    onChange={(e) => ChangeHandler(e)}
                    checked={note.label === "exercise"}
                    required
                  />
                  Exercise
                </label>
                <label htmlFor="chores">
                  <input
                    type="radio"
                    name="label"
                    id="chores"
                    value="chores"
                    onChange={(e) => ChangeHandler(e)}
                    checked={note.label === "chores"}
                    required
                  />
                  Chores
                </label>
                <label htmlFor="creativity">
                  <input
                    type="radio"
                    name="label"
                    id="creativity"
                    value="creativity"
                    onChange={(e) => ChangeHandler(e)}
                    checked={note.label === "creativity"}
                    required
                  />
                  Creativity
                </label>
                <label htmlFor="others">
                  <input
                    type="radio"
                    name="label"
                    id="others"
                    value="others"
                    onChange={(e) => ChangeHandler(e)}
                    checked={note.label === "others"}
                    required
                  />
                  Others
                </label>
              </div>
              <p className="titel-label">
                Priority<small className="star_color">*</small>
              </p>
              <div className="label-container dis_flex">
                <label htmlFor="High">
                  <input
                    type="radio"
                    name="priority"
                    id="High"
                    value="High"
                    onChange={(e) => ChangeHandler(e)}
                    checked={note.priority === "High"}
                    required
                  />
                  High
                </label>
                <label htmlFor="Low">
                  <input
                    type="radio"
                    name="priority"
                    id="Low"
                    value="Low"
                    onChange={(e) => ChangeHandler(e)}
                    checked={note.priority === "Low"}
                    required
                  />
                  Low
                </label>
                <label htmlFor="Medium">
                  <input
                    type="radio"
                    name="priority"
                    id="Medium"
                    value="Medium"
                    onChange={(e) => ChangeHandler(e)}
                    checked={note.priority === "Medium"}
                    required
                  />
                  Medium
                </label>
              </div>
              <div className="toolbar-container">
                <ReactQuill
                  className="editor"
                  modules={modules}
                  formats={formats}
                  theme="snow"
                  placeholder="Take a note"
                  value={note.notebody}
                  required
                  onChange={(e) => setnotes({ ...note, notebody: e })}
                />
              </div>
              <button className="login_btn btn_style">
                {note.isediting ? "Update Note" : " Add Note"}
              </button>
            </div>
          </div>
          <BsFillXCircleFill
            className="del-icon"
            onClick={() => setcreateNote(false)}
          />
        </div>
      </form>
    </>
  );
};
