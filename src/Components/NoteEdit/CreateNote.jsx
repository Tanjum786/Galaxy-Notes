import React from "react";
import ReactQuill from "react-quill";
import "./notecard.css";
import "react-quill/dist/quill.snow.css";
export const CreateNote = () => {
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
    ],
  };
  //   const addNoteHandler = () => {};

  return (
    <>
      <div className="newNote-container">
        <div className="input-container dis_flex">
          <div className="title-container">
            <p className="titel-label">
              Title<small className="star_color">*</small>
            </p>
            <input
              className="input-filed"
              type="text"
              placeholder="title"
              required
            />
          </div>
          <p className="titel-label">
            Labels<small className="star_color">*</small>
          </p>
          <div className="label-container dis_flex">
            <label htmlFor="home">
              <input type="checkbox" name="label" id="home" required /> Home
            </label>
            <label htmlFor="work">
              <input type="checkbox" name="label" id="work" required /> Work
            </label>
            <label htmlFor="exercise">
              <input type="checkbox" name="label" id="exercise" required />{" "}
              Exercise
            </label>
            <label htmlFor="chores">
              <input type="checkbox" name="label" id="chores" required /> Chores
            </label>
            <label htmlFor="creativity">
              <input type="checkbox" name="label" id="creativity" required />{" "}
              Creativity
            </label>
            <label htmlFor="others">
              <input type="checkbox" name="label" id="others" required /> Others
            </label>
          </div>
          <p className="titel-label">
            Priority<small className="star_color">*</small>
          </p>
          <div className="label-container dis_flex">
            <label htmlFor="High">
              <input type="radio" name="label" id="High" required /> High
            </label>
            <label htmlFor="Low">
              <input type="radio" name="label" id="Low" required /> Low
            </label>
            <label htmlFor="Medium">
              <input type="radio" name="label" id="Medium" required /> Medium
            </label>
          </div>
          <div className="toolbar-container">
            <ReactQuill
              className="editor"
              modules={modules}
              formats={formats}
              theme="snow"
              placeholder="Take a note"
            />
          </div>
          <button type="submit" className="login_btn btn_style" >
            Add Note
          </button>
        </div>
      </div>
    </>
  );
};
