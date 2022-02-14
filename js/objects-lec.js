"use strict";

// CREATING AN OBJECT

let car = {};
console.log(typeof car);

car.make = 'Ford';

console.log(car);

car.model = 'Mustang';

console.log(car);


// ASSIGNING PROPERTIES TO AN OBJECT

let cohort = {
    name: 'Fortran',
    startDate: '01/31/2022',
    endDate: '07/31/2022'
}

// ACCESSING PROPERTIES
console.log(cohort.name);
console.log('The car model is: ' + car.model);


// FIND KEYS
console.log(Object.keys(car));
car.year = '1994';
console.log(Object.keys(car));
console.log(Object.keys(cohort));


// IN KEYWORD

if (!('numOfWheels' in car)) {
    car.numOfWheels = 4;
}
console.log(car);


// NESTED VALUES

let elixirCohort = {
    name: 'Elixir',
    startYear: '2021',
    students: ["Hector", "David", "Brendan", "Brice", "Collin", "Daniel", "Emilio", "Irvin", "Justin", "Jennifer", "Micah", "Patrick", "Rachel", "Raymond", "Scott", "Trevor", "Wesley", "William"],
    hasGraduated: false
}

console.log(elixirCohort.startYear);

console.log(elixirCohort.hasGraduated);

elixirCohort.hasGraduated = true;

console.log(elixirCohort.hasGraduated);

elixirCohort.students = [
    {
        name: 'Ry',
        age: 27
    },
    {
        name: 'Casey',
        age: 27
    },
    {
        name: 'Docrob',
        age: 40
    }
];

console.log(elixirCohort.students[0].name);

console.log(elixirCohort);

// ASSIGNING FUNCTIONALITY(BEHAVIORS) TO AN OBJECT

car.printNumberOfWheels = function () {
    console.log(this.numOfWheels);
}

car.printNumberOfWheels();

elixirCohort.printAllStudentNames = function () {
    // console.log(this.students[0].name);
    this.students.forEach(function (student) {
        console.log(student.name);
    })
}

elixirCohort.printAllStudentNames();

// STUDENT STRING FROM SPREADSHEET
let cohortString = "Barfield,Pat\n" +
    "Benjamin,Keith\n" +
    "Carranza,Uziel\n" +
    "Eliason,Christopher\n" +
    "Foote,Jordan\n" +
    "Hernandez,Anthony\n" +
    "Jackson,Richard\n" +
    "Kauff,Matthew\n" +
    "Livingston,Mersedyes\n" +
    "Lohmeier,Brett\n" +
    "MacLarty,Jeffrey\n" +
    "Martinez,Juan\n" +
    "Martinez,Rebecca\n" +
    "Mendoza,Ryan\n" +
    "Puryear,George\n" +
    "Roberts,Will\n" +
    "Smith,Ashauna\n" +
    "Stokes,Mark\n" +
    "Williams,Tyreik\n" +
    "Woodward,James\n" +
    "Zavala,Daniel"


// SPLIT NAME STRING WITH ALL NAMES TO ARRAY
let cohortNameArr = cohortString.split('\n');

// INITIALIZE STUDENT ARRAY (BUCKET)
let cohortStudents = [];

// LOOP THROUGH ARRAY OF STUDENT NAMES
cohortNameArr.forEach(function (student) {
    // SPLIT EACH NAME
    let splitName = student.split(',')

    // CREATE NEW OBJECT FOR EACH STUDENT NAME
    cohortStudents.push({
        // SET FIRST AND LAST NAME
        firstName: splitName[1],
        lastName: splitName[0],
        // SET ARRAY OF FOUR RANDOM GRADES FOR DEMO PURPOSES
        grades: [Math.floor(Math.random() * (100 - 50 + 1)) + 50, Math.floor(Math.random() * (100 - 50 + 1)) + 50, Math.floor(Math.random() * (100 - 50 + 1)) + 50, Math.floor(Math.random() * (100 - 50 + 1)) + 50],
        gradeAverage: function () {
            let sum = 0;
            this.grades.forEach(function (grade) {
                sum += grade;
            });
            return sum / this.grades.length;
        }
    });
});

// ADD TO COHORT OBJECT
cohort.students = cohortStudents;
console.log(cohort.students[0].grades);
console.log(cohort.students[0].gradeAverage());

cohort.getCohortAverage = function () {
    let sum = 0;
    this.students.forEach(function (student) {
        sum += student.gradeAverage();
    });
    return sum / this.students.length;
}

console.log(cohort.getCohortAverage());


