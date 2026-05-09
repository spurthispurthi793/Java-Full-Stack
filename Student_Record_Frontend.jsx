import React, { useState } from "react";

function App() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [students, setStudents] = useState([]);

    const addStudent = () => {

        setStudents([
            ...students,
            { name, age }
        ]);

        setName("");
        setAge("");
    };

    return (

        <div>

            <h1>Student Record System</h1>

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
            />

            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) =>
                    setAge(e.target.value)
                }
            />

            <button onClick={addStudent}>
                Add Student
            </button>

            <ul>

                {students.map((student, index) => (

                    <li key={index}>
                        {student.name} - {student.age}
                    </li>

                ))}

            </ul>

        </div>
    );
}

export default App;
