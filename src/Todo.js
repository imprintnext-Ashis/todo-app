import React, { useEffect } from 'react'


export default function Todo(props) {
    const { newTask, setNewTask, addTask, editIndex, setedit } = props;

    useEffect(() => {
        if (newTask === "") {
            setedit(null);
        }
    }, [newTask, setedit]);



    return (
        <div className="App">
            <h1>TODO List</h1>
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={addTask}>
                    {editIndex !== null ? 'Update' : 'Add'}
                </button>
            </div>
            <div
             className="form-floating mt-4"
             style={{    margin: "0 auto",
                         width: "80%",
                    
                     }} >
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label htmlFor="floatingTextarea">Description</label>

            </div>

        </div>
    )
}
