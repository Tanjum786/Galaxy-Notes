import { Sidebar } from '../../Components/SideBar.jsx/Sidebar'

export const Archive = () => {
  return (
    <>
      <div className="note-main-container dis_flex ">
        <Sidebar />
        <div className="notePage-container dis_flex">
          <div className="trash-container">
            {archiveList.length > 0 ? (
              <>
                <h1 className="notetitle">
                  {` You Have ${archiveList.length} Notes in Archive`}
                </h1>
                {archiveList.map((notesDetailes) => {
                  const {
                    priority, title, label, date, notebody, id }= notesDetailes;
                  return (
                    <div className="newnote-container">
                      <div className="labels-container">
                        <p className="sub-label">{priority}</p>
                        <p className="sub-label">{label}</p>
                        <div className="dis_flex pin-container">
                          <button className="pin-btn">
                            <i className="fa-solid fa-thumbtack pin-btn"></i>
                          </button>
                        </div>
                      </div>
                      <hr />
                      <div className="notes-body">
                        <h1>{title}</h1>
                        <p dangerouslySetInnerHTML={{ __html: notebody }}></p>
                        <span className="date">created on: {date}</span>
                      </div>

                      <div className="editing-tools dis_flex">
                        <button className="tool-btns">
                          <i className="tool-icon fa-solid fa-palette"></i>
                        </button>
                        <button
                          className="tool-btns"
                          onClick={() =>
                            Notesdispatch({
                              type: "MOVE_FROM_ARCHIVE",
                              payload: notesDetailes,
                            })
                          }
                        >
                          <i class="fa-solid fa-box-open tool-icon"></i>
                        </button>
                        <button
                          className="tool-btns"
                          onClick={() =>
                            Notesdispatch({
                              type: "DELETE_FROM_ARCHIVE",
                              payload: { id: id },
                            })
                          }
                        >
                          <i class="fa-solid fa-trash tool-icon"></i>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <h1 className="notetitle">Archive is Empty</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
