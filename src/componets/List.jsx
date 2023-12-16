import { useState } from "react";
import "../list.css";

export default function List(props) {
  const { task, ondelete, onedit, setNewTask, newTask, setedit ,buttonDisabled,setButtonDisabled } = props;

  const [edit, setEdit] = useState(false);
  const [show, setshow] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const showpara = (index) => {
    setshow(!show);
    setSelectedTaskIndex(index);
  };

  const editpara = (index) => {
    setEdit(!edit);
    setSelectedTaskIndex(index);
  };

  return (
    <>
      <div>
        {task.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th style={{ padding: "12px", textAlign: "left" }}>Task</th>
                <th style={{ padding: "12px", textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {task.map((taskItem, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #dee2e6" }}>
                  <td>
                    <div>
                      {edit && selectedTaskIndex === index ? (
                        <>
                          <input
                            type="text"
                            value={newTask.todo || ''}
                            className="form-control my-3"
                            onChange={(e) => setNewTask({ ...newTask, todo: e.target.value })}
                          />
                          <input
                            type="text"
                            value={newTask.desc || ''}
                            className="form-control"
                            onChange={(e) => setNewTask({ ...newTask, desc: e.target.value })}
                          />
                        </>
                      ) : (
                        <>
                          <div>
                            <p>{taskItem.todo}</p>
                            {show && selectedTaskIndex === index && (
                              <p>{taskItem.desc}</p>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </td>
                  <td style={{ padding: "12px", textAlign: "center" }}>
                    <div className="button">
                      <button
                        onClick={() => ondelete(index)}
                        className="btn btn-danger"
                        disabled={!buttonDisabled}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          onedit(index);
                          editpara(index);
                          setedit(index);
                          setButtonDisabled(!buttonDisabled);
                        }}
                      >
                        {edit && selectedTaskIndex === index ?  'SAVE' : 'EDIT'}
                      </button>
                      <button
                        className="btn btn-success"
                        onClick={() => showpara(index)}
                        disabled={!buttonDisabled}
                      >
                        Show Description
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
