import React, { useEffect } from 'react';

export default function Todo(props) {
    const { newTask, setNewTask, addTask, setedit,setdivshow, divshow,buttonDisabled,setButtonDisabled} = props;

    useEffect(() => {
        if (newTask.todo === "") {
            setedit(null);
        }
    }, [newTask.todo, setedit]);

    const clearFields = () => {
        setNewTask({
            todo: '',
            desc: '',
        });
    };

      
  const showfield=()=>{
    setdivshow(!divshow);
    setButtonDisabled(!buttonDisabled);
    addTask()
  }

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title text-center">TODO LIST</h1>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="taskInput" className="form-label">Task</label>
                            <input
                                type="text"
                                id="taskInput"
                                className="form-control"
                                placeholder="Enter task"
                                value={newTask.todo ?? ''}
                                onChange={(e) => setNewTask({ ...newTask, todo: e.target.value })}

                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="descTextarea" className="form-label">Description</label>
                            <textarea
                                id="descTextarea"
                                className="form-control"
                                placeholder="Enter Description"
                                value={newTask.desc ?? ''}
                                onChange={(e) => setNewTask({ ...newTask, desc: e.target.value })}
                            />
                        </div>

                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={showfield}
                        >
                            Add
                        </button>

                        <button
                            type="button"
                            className="btn btn-secondary ms-2"
                            onClick={clearFields}
                        >
                            Clear
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}
