import { useState } from "react";




function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <form onSubmit={handleAddTask} className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task"
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Add Task
        </button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 mb-2 p-2 rounded"
          >
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
              className="text-red-500 hover:text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

