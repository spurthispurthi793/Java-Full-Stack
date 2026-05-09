CREATE TABLE Departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100)
);

CREATE TABLE Employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    salary INT,
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
);

CREATE TABLE Projects (
    project_id INT PRIMARY KEY,
    emp_id INT,
    project_name VARCHAR(100),
    FOREIGN KEY (emp_id) REFERENCES Employees(emp_id)
);

INSERT INTO Departments VALUES
(1, 'IT'),
(2, 'HR'),
(3, 'Finance');

INSERT INTO Employees VALUES
(1, 'Ravi', 50000, 1),
(2, 'Meena', 70000, 2),
(3, 'Arun', 60000, 1),
(4, 'Kiran', 45000, 2),
(5, 'Pooja', 80000, 3);

INSERT INTO Projects VALUES
(101, 1, 'AI System'),
(102, 2, 'Payroll App'),
(103, 3, 'Database Tool'),
(104, 5, 'Finance Tracker');

SELECT name, salary
FROM Employees
WHERE salary > (
    SELECT AVG(salary)
    FROM Employees
);

SELECT name
FROM Employees
WHERE dept_id IN (
    SELECT dept_id
    FROM Departments
    WHERE dept_name IN ('IT', 'Finance')
);

SELECT name, salary, dept_id
FROM Employees e
WHERE salary > (
    SELECT AVG(salary)
    FROM Employees
    WHERE dept_id = e.dept_id
);

SELECT name
FROM Employees
WHERE emp_id IN (
    SELECT emp_id
    FROM Projects
    WHERE emp_id IN (
        SELECT emp_id
        FROM Employees
        WHERE dept_id = (
            SELECT dept_id
            FROM Departments
            WHERE dept_name = 'IT'
        )
    )
);
