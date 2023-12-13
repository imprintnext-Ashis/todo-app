

export default function List(props) {
  const { task, ondelete, onedit } = props;
  const load = () => {
    console.log("loading");
  }
  console.log(task)
  return (
    <>
      <ul onLoad={load}>
        {task.map((taskItem, index) => (
          <li key={index}
            onClick={() => onedit(index)}
          >
            {taskItem}
            <button onClick={() => ondelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}
