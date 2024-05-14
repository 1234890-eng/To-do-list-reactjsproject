import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from './actions';
import './TaskList.css'; // Import CSS file for TaskList component

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="task-list-container">
      <h2>Tasks</h2>
      <div className="task-list-box">
        {tasks.map((task, index) => (
          <div key={task.id} className="task-item">
            <span className="task-text">{index + 1}. {task.text}</span>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
