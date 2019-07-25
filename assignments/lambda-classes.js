// CODE here for your Lambda Classes

///////////////////BELOW IS WHERE MY CLASSES ARE

class Person {
    constructor(attributes){
       this.name = attributes.name,
       this.age = attributes.age,
       this.location = attributes.location
    }
    speak(){
        console.log(`Hi! My name is ${this.name} and I am from ${this.location}!`)
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.speciality = attributes.speciality,
        this.favLanguage = attributes.favLanguage,
        this.catchPhrase = attributes.catchPhrase
    }///I NEED TO EXTEND AND SUPER THESE
    demo(subject){
        console.log(`Today we are learning about ${subject}.`)
    }
    grade(student, subject){
        console.log(`${this.name} receives a perfect score on ${subject}.`)
    }
}

class Student extends Instructor{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground,
        this.className = attributes.classname,
        this.favSubjects = attributes.favSubjects
    }
    listsSubjects(){
        console.log(`${this.favSubjects}`)//
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }
}


class ProjectManagers extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName,
        this.favInstructor = attributes.favInstructor
    }
    standUp(slack){
    console.log(`${this.name} announces to ${slack}, @channel standby times!`)
    }
    debugsCode(student, subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}












//////////BELOW IS WHERE MY DATA FOR PEOPLE IS///////


//Person
const personOne = new Person({
    name: "Josh",
    age: "33",
    location: "New Orleans"
})

const personTwo = new Person({
    name: "Corneilus",
    age: "27",
    location: "Miami"
})
//Instructor

const instructorOne = new Instructor({
    name: "Smitty",
    age: "32",
    location: "San Fran",
    speciality: "Redux",
    favLanguage: "JavaScript",
    catchPhrase: "Carpe Diem"
})

const instructorTwo = new Instructor({
    name: "Adriel",
    age: "38",
    location: "Chicago",
    speciality: "Ruby",
    favLanguage: "Java",
    catchPhrase: "You only live once"
})

//Student

const studentOne = new Student({
    name: "Lindsey",
    age: 34,
    location: "New Orleans",
    favSubjects: ["CSS", "HTML"],
})

const studentTwo = new Student({
    name: "Melissa",
    age: 31,
    location: "Jacksonville, FL",
    favSubjects: ["JavaScript", "Ruby"],
})
//PM

const PMOne = new ProjectManagers({
    name: "Annie",
    age: 26,
    location: "Dallas",
    gradClassName: "CS1",
    favInstructor: "Josh Knell"
})

const PMTwo = new ProjectManagers({
    name: "Maggie",
    age: 28,
    location: "Phoenix",
    gradClassName: "Area51",
    favInstructor: "Daniel"
})


///// Testing Below

personOne.speak();
personTwo.speak();
instructorOne.demo("CSS");
instructorOne.grade(studentOne, "JavaScript");
instructorTwo.demo("HTML");
instructorTwo.grade(studentTwo, "Java");
studentOne.listsSubjects();
studentTwo.listsSubjects();
studentOne.PRAssignment("HTML");
studentTwo.PRAssignment("CSS");
studentOne.sprintChallenge("Flex-Box");
studentTwo.sprintChallenge("Git and Terminal");
PMOne.standUp("Webb22-Christina");
PMTwo.standUp("Webb22_AH");
PMOne.debugsCode("JavaScript");
PMTwo.debugsCode("Closures");