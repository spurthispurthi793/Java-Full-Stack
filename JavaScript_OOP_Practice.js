class Person {

    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {

    constructor(name, marks) {
        super(name);
        this.marks = marks;
    }

    showDetails() {
        console.log("Name: " + this.name + ", Marks: " + this.marks);
    }
}

const student1 = new Student("John", 90);
student1.showDetails();



class Animal {

    eat() {
        console.log("Animal eats food");
    }
}

class Dog extends Animal {

    eat() {
        super.eat();
        console.log("Dog eats bones");
    }
}

const dog1 = new Dog();
dog1.eat();



class User {

    #password;

    setPassword(pass) {

        if (pass.length >= 6) {
            this.#password = pass;
        } else {
            console.log("Password too short");
        }
    }

    getPassword() {
        return this.#password;
    }
}

const user1 = new User();

user1.setPassword("123");

user1.setPassword("mypassword");

console.log(user1.getPassword());



class Laptop {

    #bootSystem() {
        console.log("Booting system...");
    }

    start() {
        this.#bootSystem();
        console.log("Laptop started");
    }
}

const laptop1 = new Laptop();
laptop1.start();
