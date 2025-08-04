import React from 'react';
import Button from 'react-bootstrap/Button';
import { AddTaskModal } from './addTaskModal';
import { NotificationBox } from './NotificationBox';
import { TaskCard } from './TaskCard';

export const Tasklist = () => {
    const [show, setShow] = React.useState(false);

    const [tasks, setTasks] = React.useState([
        { id: 1, title: 'Task 1', completed: true },
        { id: 2, title: 'Task 2', completed: true },
        { id: 3, title: 'Task 3', completed: false }
    ]);

    const handleShow = () => setShow(true);

    function deleteTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    function taskDone(id) {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: task.completed ? false : true };
            }
            return task;
        }));
    }
    return (
        <div className="tasklist">
            <h1>Task List</h1>
            <ul>
                <Button variant="primary" onClick={handleShow}>
                    Add Task
                </Button>
                <AddTaskModal show={show} setShow={setShow} tasks={tasks} setTasks={setTasks} />
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} deleteTask={deleteTask} taskDone={taskDone} />
                ))}
            </ul>

            <div className="d-flex">
                <NotificationBox
                    type="success"
                    title="Task List"
                    description="This is a simple task list application."
                />
                <NotificationBox
                    type="warning"
                    title="Warning"
                    description="This is a warning message."
                />
            </div>
        </div>
    )
}
