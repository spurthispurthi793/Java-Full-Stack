CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Clubs (
    club_id INT PRIMARY KEY,
    club_name VARCHAR(100)
);

CREATE TABLE Student_Club (
    student_id INT,
    club_id INT,
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (club_id) REFERENCES Clubs(club_id)
);

INSERT INTO Students VALUES
(1, 'Rahul'),
(2, 'Priya'),
(3, 'Amit'),
(4, 'Neha');

INSERT INTO Clubs VALUES
(101, 'Robotics'),
(102, 'Photography');

INSERT INTO Student_Club VALUES
(1, 101),
(2, 102),
(3, 101);

SELECT Students.name, Clubs.club_name
FROM Students
INNER JOIN Student_Club
ON Students.student_id = Student_Club.student_id
INNER JOIN Clubs
ON Student_Club.club_id = Clubs.club_id;


CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Subscriptions (
    sub_id INT PRIMARY KEY,
    user_id INT,
    plan VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

INSERT INTO Users VALUES
(1, 'Arjun'),
(2, 'Sneha'),
(3, 'Karan'),
(4, 'Meera');

INSERT INTO Subscriptions VALUES
(201, 1, 'Premium'),
(202, 2, 'Basic');

SELECT Users.name, Subscriptions.plan
FROM Users
LEFT JOIN Subscriptions
ON Users.user_id = Subscriptions.user_id;


CREATE TABLE Authors (
    author_id INT PRIMARY KEY,
    author_name VARCHAR(100)
);

CREATE TABLE Books (
    book_id INT PRIMARY KEY,
    title VARCHAR(100),
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES Authors(author_id)
);

INSERT INTO Authors VALUES
(1, 'R.K. Narayan'),
(2, 'Chetan Bhagat');

INSERT INTO Books VALUES
(301, 'Malgudi Days', 1),
(302, 'Five Point Someone', 2),
(303, 'Unknown Mystery', NULL);

SELECT Books.title, Authors.author_name
FROM Authors
RIGHT JOIN Books
ON Authors.author_id = Books.author_id;
