import React, { useState } from "react";

function TodoForm({ addTask }) {

    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.trim() === "") {
            return;
        }

        addTask(task);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button type="submit">
                Add Task
            </button>

        </form>
    );
}

function TodoList({ tasks, deleteTask }) {

    return (
        <ul>

            {tasks.map((task, index) => (

                <li key={index}>

                    {task}

                    <button
                        onClick={() => deleteTask(index)}
                    >
                        Delete
                    </button>

                </li>

            ))}

        </ul>
    );
}

function App() {

    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (index) => {

        const updatedTasks =
            tasks.filter((_, i) => i !== index);

        setTasks(updatedTasks);
    };

    return (

        <div>

            <h1>To-Do List App</h1>

            <TodoForm addTask={addTask} />

            <TodoList
                tasks={tasks}
                deleteTask={deleteTask}
            />

        </div>
    );
}

export default App;
