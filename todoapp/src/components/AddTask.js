
export const AddTask = ({ tasklist, setTaskList, taskupdate, setTaskUpdate }) => {

  var buttontext = document.querySelector("button");
  if (taskupdate.id) {
    buttontext.innerText = "Update";
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskupdate.id) {
      const updatedTasklist = tasklist.map((todo) => {
        return todo.id === taskupdate.id ? { id: todo.id, title: taskupdate.title, time: new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString() } : todo;
      });
      setTaskList(updatedTasklist);
      setTaskUpdate({});
      e.target.task.value = "";
      buttontext.innerText = "Add Task";
    } else {
      buttontext.innerText = "Add Task";
      const randomId = Math.floor(Math.random() * 1000);
      const taskname = e.target.task.value;
      setTaskList([...tasklist, { id: randomId, title: taskname, time: new Date().toLocaleTimeString() + " " + new Date().toLocaleDateString() }]);
      e.target.task.value = "";
    }
  }

  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" autoComplete="off" placeholder="Add task" value={taskupdate.title || ""} maxLength="25" onChange={e => setTaskUpdate({ ...taskupdate, title: e.target.value })} />
        <button type="submit">Add Task</button>
      </form>
    </section>
  )
}
