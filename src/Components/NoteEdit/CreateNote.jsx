import React from "react";
import ReactQuill from "react-quill";
import "./notecard.css";
import "react-quill/dist/quill.snow.css";
import { useNotes } from "../../Hooks/context/Notes-context";
export const CreateNote = () => {
  const { notes, setnotes, Notesdispatch, notesObj } = useNotes();

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
    setnotes({ ...notes, [e.target.name]: e.target.value });
  };
  const NotesubmitHandler = (e) => {
    e.preventDefault();
    Notesdispatch({ type: "ADD_NOTE", payload: notes });
    setnotes('');
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
      <form type='reset' onSubmit={(e) => NotesubmitHandler(e)}>
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
                placeholder="Enter a title"
                checked={notes.title}
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
                  checked={notes.label === "home"}
                  onChange={(e) => ChangeHandler(e)}
                  required
                /> Home
              </label>
              <label htmlFor="work">
                <input
                  type="radio"
                  name="label"
                  id="work"
                  value="work"
                  checked={notes.label === "work"}
                  onChange={(e) => ChangeHandler(e)}
                  required
                /> Work
              </label>
              <label htmlFor="exercise">
                <input
                  type="radio"
                  name="label"
                  id="exercise"
                  value="exercise"
                  checked={notes.label === "exercise"}
                  onChange={(e) => ChangeHandler(e)}
                  required
                /> Exercise
              </label>
              <label htmlFor="chores">
                <input
                  type="radio"
                  name="label"
                  id="chores"
                  value="chores"
                  checked={notes.label === "chores"}
                  onChange={(e) => ChangeHandler(e)}
                  required
                /> Chores
              </label>
              <label htmlFor="creativity">
                <input
                  type="radio"
                  name="label"
                  id="creativity"
                  value="creativity"
                  checked={notes.label === "creativity"}
                  onChange={(e) => ChangeHandler(e)}
                  required
                /> Creativity
              </label>
              <label htmlFor="others">
                <input
                  type="radio"
                  name="label"
                  id="others"
                  value="others"
                  checked={notes.label === "others"}
                  onChange={(e) => ChangeHandler(e)}
                  required
                /> Others
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
                  checked={notes.priority === "High"}
                  onChange={(e) => ChangeHandler(e)}
                  required
                /> High
              </label>
              <label htmlFor="Low">
                <input
                  type="radio"
                  name="priority"
                  id="Low"
                  value="Low"
                  checked={notes.priority === "Low"}
                  onChange={(e) => ChangeHandler(e)}
                  required
                /> Low
              </label>
              <label htmlFor="Medium">
                <input
                  type="radio"
                  name="priority"
                  id="Medium"
                  value="Medium"
                  checked={notes.priority === "Medium"}
                  onChange={(e) => ChangeHandler(e)}
                  required
                /> Medium
              </label>
            </div>
            <div className="toolbar-container">
              <ReactQuill
                className="editor"
                modules={modules}
                formats={formats}
                theme="snow"
                placeholder="Take a note"
                checked={notes.notebody}
                required
                onChange={(e) =>setnotes({...notes,notebody:e})}
              />
            </div>
            <button className="login_btn btn_style">Add Note</button>
          </div>
        </div>
      </form>
    </>
  );
};
