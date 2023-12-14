

export default function List(props) {
  const { task, ondelete, onedit } = props;

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
                    value={taskItem}
                    className="form-control"
                  />
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
