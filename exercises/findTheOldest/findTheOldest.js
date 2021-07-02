let findTheOldest = function(array) {
    let currentOldestPerson = array[0];
    let age =0; 

    array.forEach((person,index)=> {
        if(person.yearOfDeath) {
            age = person.yearOfDeath- person.yearOfBirth;
        } else {
            age = new Date().getFullYear() - person.yearOfBirth;
        }

        if(currentOldestPerson.yearOfDeath) {
            oldAge = currentOldestPerson.yearOfDeath- currentOldestPerson.yearOfBirth;
        } else {
            oldAge = new Date().getFullYear() - currentOldestPerson.yearOfBirth;
        }
        console.log(age);

        if(age > oldAge) {
            currentOldestPerson = person;
        }
        
    })


    return currentOldestPerson;
}

module.exports = findTheOldest
