import styles from './TaskCard.module.css';

export const TaskCard = ({ task, deleteTask, taskDone }) => {
    return (
        <li className={task.completed ? 'completed' : 'incomplete'}>
            <div className="px-3">
                <span className={styles.title}  >{task.id} - {task.title}</span>
                <input
                    className="checkbox-button mx-3"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => taskDone(task.id)}
                />
            </div>
            <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    )
}
