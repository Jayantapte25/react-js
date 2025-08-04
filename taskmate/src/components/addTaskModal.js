import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function AddTaskModal({ show, setShow, tasks, setTasks }) {

    // Using useRef to get the input value
    // This is an alternative to using document.getElementById which is not recommended in React
    const taskTitleRef = useRef();

    function addTasks() {
        const newTask = { id: tasks.length + 1, title: taskTitleRef.current.value, completed: false };
        setTasks(tasks.concat(newTask));
    }

    const handleClose = () => setShow(false);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="taskTitle" className="form-label">Task Title</label>
                            <input type="text" id="taskTitle" ref={taskTitleRef} className="form-control" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        handleClose();
                        addTasks();
                    }}>Save Changes</Button>
            </Modal.Footer>
        </Modal >
        </>
    );
}