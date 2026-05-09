CREATE TABLE Doctors (
    doctor_id INT PRIMARY KEY,
    doctor_name VARCHAR(50),
    specialization VARCHAR(50),
    max_patients_per_day INT,
    booked_patients INT
);

CREATE TABLE Patients (
    patient_id INT PRIMARY KEY,
    patient_name VARCHAR(50)
);

CREATE TABLE Appointments (
    appointment_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    doctor_id INT,
    appointment_date DATE,
    FOREIGN KEY (patient_id) REFERENCES Patients(patient_id),
    FOREIGN KEY (doctor_id) REFERENCES Doctors(doctor_id)
);

INSERT INTO Doctors VALUES
(1, 'Dr. Ravi', 'Cardiology', 5, 2),
(2, 'Dr. Meena', 'Neurology', 4, 4),
(3, 'Dr. Arun', 'Orthopedics', 6, 1),
(4, 'Dr. Sneha', 'Dermatology', 3, 2),
(5, 'Dr. Kiran', 'Pediatrics', 5, 5);

INSERT INTO Patients VALUES
(1, 'Rahul'),
(2, 'Priya'),
(3, 'Amit'),
(4, 'Neha'),
(5, 'Pooja'),
(6, 'Karan'),
(7, 'Meera'),
(8, 'Arjun'),
(9, 'Sneha'),
(10, 'Ravi');

DELIMITER //

CREATE PROCEDURE book_appointment(
    IN p_patient_id INT,
    IN p_doctor_id INT,
    IN p_appointment_date DATE
)
BEGIN
    DECLARE current_booked INT;
    DECLARE max_slots INT;

    SELECT booked_patients, max_patients_per_day
    INTO current_booked, max_slots
    FROM Doctors
    WHERE doctor_id = p_doctor_id;

    IF current_booked < max_slots THEN

        INSERT INTO Appointments(patient_id, doctor_id, appointment_date)
        VALUES (p_patient_id, p_doctor_id, p_appointment_date);

        UPDATE Doctors
        SET booked_patients = booked_patients + 1
        WHERE doctor_id = p_doctor_id;

        SELECT 'Appointment Booked Successfully' AS Message;

    ELSE

        SELECT 'Doctor not available today' AS Message;

    END IF;

END //

DELIMITER ;

CALL book_appointment(3,1,'2026-03-15');

CALL book_appointment(5,2,'2026-03-15');

SELECT * FROM Appointments;

SELECT * FROM Doctors;
