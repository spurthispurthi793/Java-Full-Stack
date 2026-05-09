from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")

db = client["libraryDB"]

books = db["books"]

book1 = {
    "book_id": 101,
    "title": "Data Structures",
    "author": "Mark Allen",
    "genre": "Computer Science",
    "status": "Available"
}

book2 = {
    "book_id": 102,
    "title": "Python Basics",
    "author": "John Smith",
    "genre": "Programming",
    "status": "Available"
}

book3 = {
    "book_id": 103,
    "title": "Database Systems",
    "author": "Ravi Kumar",
    "genre": "Computer Science",
    "status": "Available"
}

books.insert_many([book1, book2, book3])

print("All Books")
for book in books.find():
    print(book)

print("\nComputer Science Books")
for book in books.find({"genre": "Computer Science"}):
    print(book)

books.update_one(
    {"book_id": 101},
    {"$set": {"status": "Issued"}}
)

print("\nUpdated Book Status")
for book in books.find({"book_id": 101}):
    print(book)

books.delete_one({"book_id": 102})

print("\nBooks After Deletion")
for book in books.find():
    print(book)
