import React, { useState } from "react";

function StudentForm({ addStudent }) {

    const [student, setStudent] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (student.trim() === "") {
            return;
        }

        addStudent(student);

        setStudent("");
    };

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter Student Name"
                value={student}
                onChange={(e) => setStudent(e.target.value)}
            />

            <button type="submit">
                Add Student
            </button>

        </form>
    );
}

function StudentList({ students }) {

    if (students.length === 0) {
        return <p>No students</p>;
    }

    return (

        <ul>

            {students.map((student, index) => (

                <li key={index}>
                    {student}
                </li>

            ))}

        </ul>
    );
}

function App() {

    const [students, setStudents] = useState([]);

    const addStudent = (name) => {
        setStudents([...students, name]);
    };

    return (

        <div>

            <h1>Student Manager App</h1>

            <StudentForm addStudent={addStudent} />

            <StudentList students={students} />

        </div>
    );
}

export default App;
