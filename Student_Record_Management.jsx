import React, { useState } from "react";

function StudentForm({ addStudent }) {

    const [studentName, setStudentName] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (studentName.trim() === "") {
            return;
        }

        addStudent(studentName);

        setStudentName("");
    };

    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter Student Name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
            />

            <button type="submit">
                Add Student
            </button>

        </form>
    );
}

function StudentList({ students, deleteStudent }) {

    return (

        <div>

            <h2>Student List</h2>

            <ul>

                {students.map((student, index) => (

                    <li key={index}>

                        {student}

                        <button
                            onClick={() => deleteStudent(index)}
                            style={{ marginLeft: "10px" }}
                        >
                            Delete
                        </button>

                    </li>

                ))}

            </ul>

        </div>
    );
}

function App() {

    const [students, setStudents] = useState([]);

    const addStudent = (name) => {

        setStudents([...students, name]);
    };

    const deleteStudent = (index) => {

        const updatedStudents =
            students.filter((_, i) => i !== index);

        setStudents(updatedStudents);
    };

    return (

        <div style={{ padding: "20px" }}>

            <h1>Student Record Management</h1>

            <StudentForm addStudent={addStudent} />

            <StudentList
                students={students}
                deleteStudent={deleteStudent}
            />

        </div>
    );
}

export default App;
