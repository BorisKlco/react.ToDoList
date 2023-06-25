import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setList] = useState([]);

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    setList((taskList) => [...taskList, task]);
  };

  const removeTask = (taskIndex) => {
    setList((taskList) => taskList.filter((_, index) => index !== taskIndex));
  };

  return (
    <>
      <h1>react.ToDoList</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          To Do: <input onChange={handleTask} value={task} />
        </label>
        <button disabled={!task} onClick={addTask}>
          Add
        </button>
      </form>
      <p>useState: {task}</p>
      <ol>
        {taskList.map((task, index) => (
          <>
            <li key={index}>
              {task} <button onClick={() => removeTask(index)}>X</button>
            </li>
          </>
        ))}
      </ol>
    </>
  );
}

export default App;
