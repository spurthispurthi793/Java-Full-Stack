import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {

        const response =
            await axios.get("http://localhost:8080/tasks");

        setTasks(response.data);
    };

    const addTask = async () => {

        await axios.post(
            "http://localhost:8080/tasks",
            { task }
        );

        fetchTasks();
        setTask("");
    };

    const deleteTask = async (id) => {

        await axios.delete(
            `http://localhost:8080/tasks/${id}`
        );

        fetchTasks();
    };

    return (

        <div>

            <h1>Full Stack To-Do App</h1>

            <input
                type="text"
                value={task}
                onChange={(e) =>
                    setTask(e.target.value)
                }
            />

            <button onClick={addTask}>
                Add
            </button>

            <ul>

                {tasks.map((item) => (

                    <li key={item.id}>

                        {item.task}

                        <button
                            onClick={() =>
                                deleteTask(item.id)
                            }
                        >
                            Delete
                        </button>

                    </li>

                ))}

            </ul>

        </div>
    );
}

export default App;
