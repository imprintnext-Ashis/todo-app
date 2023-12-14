import React, { useEffect } from 'react';

export default function Todo(props) {
    const { newTask, setNewTask, addTask, editIndex, setedit } = props;

    useEffect(() => {
        if (newTask.todo === "") {
            setedit(null);
        }
    }, [newTask.todo, setedit]);

    return (
        <div className="App">
            <h1>TODO LIST</h1>
            <div>
                <input
                    type="text"
                    placeholder="Task"
                    value={newTask.todo ?? ''}
                    onChange={(e) => setNewTask({ ...newTask, todo: e.target.value })}
                />
                <button onClick={addTask}>
                    {editIndex !== null ? 'Update' : 'Add'}
                </button>
            </div>
            <div className="form-floating mt-4" style={{ margin: '0 auto', width: '80%' }}>
                <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    value={newTask.desc ?? ''}
                    onChange={(e) => setNewTask({ ...newTask, desc: e.target.value })}
                ></textarea>
                <label htmlFor="floatingTextarea">Description</label>
            </div>
        </div>
    );
}
