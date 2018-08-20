

// define our class in ES6
// create a default if name(instance) does not exist
// use backticks to create template string
// then use a ${} to use JS inside string instead of concatination
// students also have ages, we just need to add Major
// use extends to extend an existing class
// make an instance of Person class
// methods are avaliable on instances
// add age to constructor (Default to 0)
// override construction function
// super(); calls parent constructor function (like Python)
// 
class Person {
    constructor(name = 'Unknown', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}.`;
    }

    getDesc() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;    
    }
    hasMajor() {
        return !!this.major;
    }

    getDesc() {
        let description = super.getDesc();
        
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description
    }

}

class Traveler extends Person {
    constructor(name, age, homelocation) {
        super(name, age);
        this.homelocation = homelocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homelocation) {
            greeting += ` I am traveling from ${this.homelocation}.`;
        }

        return greeting
    }
}

const me = new Student('Cierra Higgins', 25, 'English');
console.log(me.getDesc());

const trav =  new Traveler('Cierra Higgins', 25, 'Missoula');
console.log(trav.getGreeting());

const other = new Student();
console.log(other.getDesc());

