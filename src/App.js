
import { useState } from 'react';
import './App.css';
import './componets/List'
import Todo from './componets/Todo';
import List from './componets/List';
import Alert from './componets/Alert';
import Hide from './componets/Hide';

function App() {



  const [divshow, setdivshow] = useState(false)

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    todo: '',
    desc: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [colors, setColors] = useState("red")

  const addTask = () => {
    const todoValue = (newTask.todo || '').trim();


    if (todoValue !== '') {
      if (editIndex !== null) {
        const edit = window.confirm('Are you sure you want to edit this task?');

        if (edit) {
          const updatedTasks = [...tasks];
          updatedTasks[editIndex] = newTask;
          setTasks(updatedTasks);
          setConfirmationMessage('Task edited successfully!');
         
          setTimeout(() => {
            setConfirmationMessage('');
            setEditIndex(null);
          }, 3000);
        }
      } else {
        setTasks([...tasks, newTask]);
        setNewTask('');
      }
      setNewTask('');
    } else {

      setEditIndex(null);
    }
  };




  const edittask = (index) => {


    setNewTask(tasks[index]);
    setEditIndex(index);
    setColors("green")
    addTask()



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

      <Hide
        setdivshow={setdivshow}
        buttonDisabled={buttonDisabled}
        setButtonDisabled={setButtonDisabled}
        divshow={divshow}
      />


      {
        divshow ? (<Todo
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
          setdivshow={setdivshow}
          buttonDisabled={buttonDisabled}
          setButtonDisabled={setButtonDisabled}
          divshow={divshow}
          editIndex={editIndex}
          setedit={setEditIndex}
        />) : (<div></div>)
      }

      <Alert
        alert={confirmationMessage}
        color={colors}
      />
      <List
        task={tasks}
        ondelete={deleteTask}
        onedit={edittask}
        setTasks={setTasks}
        editIndex={editIndex}
        newTask={newTask}
        setNewTask={setNewTask}
        addtask={addTask}
        setedit={setEditIndex}
        buttonDisabled={buttonDisabled}
        setButtonDisabled={setButtonDisabled}
      />

    </>

  );
}

export default App;
