import { useState } from "react";


export default function List(props) {
  const { task, ondelete, onedit } = props;

  const [show, setshow] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  const showpara = (index) => {
    setshow(!show);
    setSelectedTaskIndex(index);
  };

  return (
    <>

      {task.length > 0 && (
        <table className="table" style={{
          margin: "0 auto",
          width: "90%", textAlign: "center"
        }}>
          <thead className="thead-dark">
          <tr>
              <th>Task</th>
              <th>Action</th>
          </tr>
          </thead>
          <tbody>
            {task.map((taskItem, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    readOnly="readonly"
                    value={taskItem.todo}
                    className="form-control"
                  />
                 {show && selectedTaskIndex === index && <p>{taskItem.desc}</p>}

                </td>
                <td >
                  <div style={{ gap: "25px", display: "flex", justifyContent: "center" }}>

                    <button

                      onClick={() => ondelete(index)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>

                    <button
                      className="btn btn-primary"
                      onClick={() => onedit(index)}
                    >
                      Edit
                    </button>

                    <button
                    className="btn btn-success"
                    onClick={() => showpara(index)}
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

    </>
  )
}
