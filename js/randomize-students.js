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
    "Zavala,Daniel";


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
    });
});

console.log(cohortStudents);


function randomOrderGenerator(arrOfStudents) {
    let randomArray = [];
    let i = 0;
    do {
        let randomStudent = arrOfStudents[Math.floor(Math.random() * arrOfStudents.length)]
        if (randomArray.includes(randomStudent)) {
            continue;
        }
        randomArray[i] = randomStudent;
        i++;
    } while (i < arrOfStudents.length)
    return randomArray;
}

console.log(randomOrderGenerator(cohortStudents));