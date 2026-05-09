import com.mongodb.client.*;
import org.bson.Document;

import java.util.Scanner;

import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Filters.and;

public class Hostel_Management_System {

    static MongoClient mongoClient = MongoClients.create("mongodb://localhost:27017");
    static MongoDatabase database = mongoClient.getDatabase("hostelDB");

    static MongoCollection<Document> students = database.getCollection("students");
    static MongoCollection<Document> complaints = database.getCollection("complaints");
    static MongoCollection<Document> bookings = database.getCollection("bookings");

    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        while (true) {

            System.out.println("\n===== HOSTEL MANAGEMENT SYSTEM =====");
            System.out.println("1. Student Login");
            System.out.println("2. Admin Login");
            System.out.println("3. Exit");

            int choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {

                case 1:
                    studentLogin();
                    break;

                case 2:
                    adminMenu();
                    break;

                case 3:
                    System.out.println("Exiting...");
                    System.exit(0);

                default:
                    System.out.println("Invalid Choice");
            }
        }
    }

    static void studentLogin() {

        System.out.print("Enter Student ID: ");
        int studentId = sc.nextInt();
        sc.nextLine();

        System.out.print("Enter Name: ");
        String name = sc.nextLine();

        Document student = students.find(eq("studentId", studentId)).first();

        if (student == null) {

            Document newStudent = new Document("studentId", studentId)
                    .append("name", name);

            students.insertOne(newStudent);

            System.out.println("Student Registered Successfully");
        }

        studentMenu(studentId);
    }

    static void studentMenu(int studentId) {

        while (true) {

            System.out.println("\n===== STUDENT MENU =====");
            System.out.println("1. Raise Complaint");
            System.out.println("2. View Complaints");
            System.out.println("3. Book Resource");
            System.out.println("4. Cancel Booking");
            System.out.println("5. Logout");

            int choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {

                case 1:
                    raiseComplaint(studentId);
                    break;

                case 2:
                    viewComplaints(studentId);
                    break;

                case 3:
                    bookResource(studentId);
                    break;

                case 4:
                    cancelBooking(studentId);
                    break;

                case 5:
                    return;

                default:
                    System.out.println("Invalid Choice");
            }
        }
    }

    static void raiseComplaint(int studentId) {

        System.out.print("Enter Complaint Type: ");
        String type = sc.nextLine();

        System.out.print("Enter Description: ");
        String description = sc.nextLine();

        System.out.print("Enter Date: ");
        String date = sc.nextLine();

        Document complaint = new Document("studentId", studentId)
                .append("type", type)
                .append("description", description)
                .append("status", "Pending")
                .append("date", date);

        complaints.insertOne(complaint);

        System.out.println("Complaint Registered Successfully");
    }

    static void viewComplaints(int studentId) {

        FindIterable<Document> result =
                complaints.find(eq("studentId", studentId));

        for (Document doc : result) {
            System.out.println(doc.toJson());
        }
    }

    static void bookResource(int studentId) {

        System.out.println("Resources:");
        System.out.println("1. Washing Machine");
        System.out.println("2. Study Room");
        System.out.println("3. Gym Slot");

        System.out.print("Enter Resource Name: ");
        String resource = sc.nextLine();

        System.out.print("Enter Time Slot: ");
        String timeSlot = sc.nextLine();

        System.out.print("Enter Date: ");
        String date = sc.nextLine();

        Document existingBooking = bookings.find(
                and(
                        eq("resource", resource),
                        eq("timeSlot", timeSlot),
                        eq("date", date)
                )
        ).first();

        if (existingBooking != null) {

            System.out.println("Slot already booked!");
            System.out.println("Choose another time.");

        } else {

            Document booking = new Document("resource", resource)
                    .append("studentId", studentId)
                    .append("timeSlot", timeSlot)
                    .append("date", date);

            bookings.insertOne(booking);

            System.out.println("Resource Booked Successfully");
        }
    }

    static void cancelBooking(int studentId) {

        System.out.print("Enter Resource Name: ");
        String resource = sc.nextLine();

        bookings.deleteOne(
                and(
                        eq("studentId", studentId),
                        eq("resource", resource)
                )
        );

        System.out.println("Booking Cancelled");
    }

    static void adminMenu() {

        while (true) {

            System.out.println("\n===== ADMIN MENU =====");
            System.out.println("1. View Complaints");
            System.out.println("2. Update Complaint Status");
            System.out.println("3. View Bookings");
            System.out.println("4. Logout");

            int choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {

                case 1:
                    viewAllComplaints();
                    break;

                case 2:
                    updateComplaintStatus();
                    break;

                case 3:
                    viewBookings();
                    break;

                case 4:
                    return;

                default:
                    System.out.println("Invalid Choice");
            }
        }
    }

    static void viewAllComplaints() {

        FindIterable<Document> result = complaints.find();

        for (Document doc : result) {
            System.out.println(doc.toJson());
        }
    }

    static void updateComplaintStatus() {

        System.out.print("Enter Student ID: ");
        int studentId = sc.nextInt();
        sc.nextLine();

        System.out.print("Enter New Status: ");
        String status = sc.nextLine();

        complaints.updateOne(
                eq("studentId", studentId),
                new Document("$set",
                        new Document("status", status))
        );

        System.out.println("Complaint Status Updated");
    }

    static void viewBookings() {

        FindIterable<Document> result = bookings.find();

        for (Document doc : result) {
            System.out.println(doc.toJson());
        }
    }
}
