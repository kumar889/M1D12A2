// // Object hardcode

function O_person(firstName, lastName, birthYear, address, disease){
    personObj = {
        First_Name: firstName,
        Last_Name: lastName,
        Birth_year: birthYear,
        Address: address,
        Disease: disease,
        Age: 2021 - birthYear
    }
    return personObj;
}

console.log(O_person('kumar', 'sanjyal', '2000', 'kathmandu', 'cancer'));

// Normal function

function N_person(firstName, lastName, birthYear, address, disease){
    First_Name = firstName;
    Last_Name = lastName;
    Birth_Year = birthYear;
    Address = address;
    Disease = disease;
    Age = 2021 - birthYear;

    console.log(First_Name, Last_Name, Birth_Year, Address, Disease, Age);
}

N_person('kumar', 'sanjyal', '2000', 'kathmandu', 'cancer');

// // Constructor function

function Person(firstName, lastName, birthYear, address, disease){
    this.First_Name = firstName;
    this.Last_Name = lastName;
    this.Birth_Year = birthYear;
    this.Address = address;
    this.Disease = disease;

    this.Age = 2021 - this.Birth_Year;

    console.log(this);
}

let person1 = new Person('kumar', 'sanjyal', '2000', 'Kathmandu', 'cancer');