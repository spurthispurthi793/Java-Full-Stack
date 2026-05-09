const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/studentSkillDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

const practiceSchema = new mongoose.Schema({
    date: String,
    hours: Number
});

const studentSchema = new mongoose.Schema({
    studentName: String,
    skills: [String],
    level: String,
    practiceHistory: [practiceSchema]
});

studentSchema.index({ studentName: 1 });
studentSchema.index({ skills: 1 });

const Student = mongoose.model("students", studentSchema);

async function runOperations() {

    await Student.deleteMany({});

    await Student.create([
        {
            studentName: "Priya",
            skills: ["DSA", "Java"],
            level: "Intermediate",
            practiceHistory: [
                { date: "2026-03-23", hours: 2 },
                { date: "2026-03-24", hours: 3 }
            ]
        },
        {
            studentName: "Rahul",
            skills: ["Python", "Communication"],
            level: "Beginner",
            practiceHistory: [
                { date: "2026-03-23", hours: 1 },
                { date: "2026-03-24", hours: 2 }
            ]
        },
        {
            studentName: "Amit",
            skills: ["DSA", "MongoDB"],
            level: "Advanced",
            practiceHistory: [
                { date: "2026-03-23", hours: 5 },
                { date: "2026-03-24", hours: 4 }
            ]
        }
    ]);

    console.log("\nAll Students");
    console.log(await Student.find());

    console.log("\nStudents with DSA Skill");
    console.log(await Student.find({ skills: "DSA" }));

    await Student.updateOne(
        { studentName: "Rahul" },
        { $push: { skills: "JavaScript" } }
    );

    console.log("\nUpdated Student");
    console.log(await Student.findOne({ studentName: "Rahul" }));

    await Student.deleteMany({
        practiceHistory: { $size: 0 }
    });

    console.log("\nTotal Practice Hours Per Student");

    console.log(await Student.aggregate([
        {
            $unwind: "$practiceHistory"
        },
        {
            $group: {
                _id: "$studentName",
                totalHours: { $sum: "$practiceHistory.hours" }
            }
        }
    ]));

    console.log("\nTop Practicing Student");

    console.log(await Student.aggregate([
        {
            $unwind: "$practiceHistory"
        },
        {
            $group: {
                _id: "$studentName",
                totalHours: { $sum: "$practiceHistory.hours" }
            }
        },
        {
            $sort: { totalHours: -1 }
        },
        {
            $limit: 1
        }
    ]));

    console.log("\nDaily Practice Summary");

    console.log(await Student.aggregate([
        {
            $unwind: "$practiceHistory"
        },
        {
            $group: {
                _id: "$practiceHistory.date",
                totalPracticeHours: {
                    $sum: "$practiceHistory.hours"
                }
            }
        }
    ]));

    mongoose.connection.close();
}

runOperations();
