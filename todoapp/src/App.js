import React, { useEffect } from 'react';
import './App.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';

function App() {
  const [tasks, setTasks] = React.useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [taskupdate, setTaskUpdate] = React.useState({});

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <Header />
      <AddTask 
        tasklist={tasks}
        setTaskList={setTasks}
        taskupdate={taskupdate}
        setTaskUpdate={setTaskUpdate}
      />
      <ShowTask
        tasklist={tasks}
        setTaskList={setTasks}
        taskupdate={taskupdate}
        setTaskUpdate={setTaskUpdate}
      />
    </div>
  );
}

export default App;
