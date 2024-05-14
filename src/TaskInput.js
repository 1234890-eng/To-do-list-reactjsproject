import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';
import './TaskInput.css'; 

function TaskInput() {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  const handleClick = () => {
    dispatch(addTask(taskText));
    setTaskText('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
}

export default TaskInput;
