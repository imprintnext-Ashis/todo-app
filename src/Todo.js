import React from 'react'


export default function Todo(props) {
    const { newTask, setNewTask,addTask,editIndex } = props;

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
           
        </div>
    )
}
