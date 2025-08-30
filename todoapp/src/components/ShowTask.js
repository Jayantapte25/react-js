export const ShowTask = ({ tasklist, setTaskList, taskupdate, setTaskUpdate }) => {

  const deleteTask = (id) => {
    setTaskList(tasklist.filter((task) => task.id !== id));
  }

  const handleEdit = (id) => {
    tasklist.map((task) => {
      if (task.id === id) {
        setTaskUpdate(task);
      }
    });
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>Clear All</button>
      </div>
      <ul>
        {tasklist.map((task) => (
          <li key={task.id}>
            <p>
              <span className="task">{task.title}</span>
              <span className="time">{task.time}</span>
            </p>
            <i className="bi bi-pencil-square" onClick={() => handleEdit(task.id)}></i>
            <i className="bi bi-trash" onClick={() => deleteTask(task.id)}></i>
          </li>
        ))}
      </ul>
    </section>
  )
}
