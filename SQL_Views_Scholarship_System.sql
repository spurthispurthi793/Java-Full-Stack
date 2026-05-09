CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(100),
    marks INT,
    attendance INT
);

INSERT INTO Students VALUES
(1, 'Rahul', 'CSE', 85, 90),
(2, 'Priya', 'ECE', 78, 88),
(3, 'Arun', 'IT', 92, 95),
(4, 'Sneha', 'EEE', 81, 84),
(5, 'Kiran', 'CSE', 76, 80),
(6, 'Pooja', 'IT', 89, 91),
(7, 'Meena', 'ECE', 95, 97),
(8, 'Amit', 'CSE', 82, 86),
(9, 'Neha', 'EEE', 68, 75),
(10, 'Ravi', 'IT', 90, 88);

CREATE VIEW eligible_scholarship_students AS
SELECT *
FROM Students
WHERE marks > 80
AND attendance > 85;

SELECT *
FROM eligible_scholarship_students;

INSERT INTO eligible_scholarship_students
VALUES (11, 'Anjali', 'CSE', 70, 90);
