/*
JS Object Warmup, pt 4:
We are going to create a method which
 allows a user to input their desired amount of names names
use prompt, alert, confirm inside of a while loop
assign each name to an array
once the user decides they are done giving names, end the loop and return the string array
then assigning that returned array by invoking your new function on the Person.names property value!
Things to consider:
Should this be a standalone function or should it be a method on the Person object?
* */


// Defines a contact info object
function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress) {
    this.phoneNumber = phoneNumber;
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.emailAddress = emailAddress;
}

// Defines a person object
function Person(occupation, dob, contactInfo) {
    // assign a property the value of a function *definition*
    // this helps get the names of a person, but is not executed until you invoke getNames
    this.getNames = getNames;
    // actually *invoke* this.getNames() so the names are given when the Person object is created
    this.names = this.getNames();
    this.occupation = occupation;
    this.dob = dob;
    this.contactInfo = contactInfo;
}

// This function helps define *how* a user gives their names and returns
// those names as a string array
function getNames() {
    let namesArr = [];
    let hasMoreNames = true;
    while (hasMoreNames) {
        // get those names!
        namesArr.push(prompt("Please enter your desired name"));

        // if they want more names, keep looping. if not, break the loop
        hasMoreNames = confirm("Would you like to enter another name?");
    }
    return namesArr;
}

// Make a new ContactInfo object
let contact = new ContactInfo(
    '123.456.7890',
    '123 Anywhere Ln',
    'Beverly Hills',
    'CA',
    '90210',
    'nope@no-no-no.no');

// Make new Person object
let person2 = new Person(
    "Cat Herder / Firefighter",
    "11.30.1989",
    contact
);

// Log the object so we can see its values
console.log(person2);




