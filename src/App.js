
import { useState } from 'react';
import './App.css';
import './List'
import Todo from './Todo';
import List from './List';
import Alert from './Alert';

function App() {


  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');
 const[colors,setColors]  =useState("red")

  const addTask = () => {
    if (newTask.trim() !== '') {
      if (editIndex !== null) {
        const edit = window.confirm('Are you sure you want to edit this task?');
  
        if (edit) {
          const updatedTasks = [...tasks];
          updatedTasks[editIndex] = newTask;
          setTasks(updatedTasks);
          setEditIndex(null);
          setConfirmationMessage('Task edited successfully!');
          setTimeout(() => {
            setConfirmationMessage('');
          }, 3000);
        }
      } else {
        setTasks([...tasks, newTask]);
      }
      setNewTask('');
    } else {
     
      setEditIndex(null);
    }
  };
  
  


  const edittask = (index) => 
  {


    setNewTask(tasks[index]);
    setEditIndex(index);
    setColors("green")


  };

  const deleteTask = (index) => {
    const del = window.confirm('Are you sure you want to delete this task?');

    if (del) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
      setNewTask('');
      setColors("red")
      setConfirmationMessage('Task deleted successfully!');
      setTimeout(() => {
        setConfirmationMessage('');
      }, 3000);
    }
  };

  return (
    <>
      <Todo
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
        editIndex={editIndex}
        setedit={setEditIndex}
      />
      <Alert
        alert={confirmationMessage}
        color={colors}
      />
      <List
        task={tasks}
        ondelete={deleteTask}
        onedit={edittask}
      />

    </>

  );
}

export default App;
