const findTheOldest = function(people) {
    people = makeNewObjectsWithAges(people);
    let theOldest = undefined;
    people.forEach( currentPerson => {
        if(theOldest === undefined) theOldest = currentPerson;
        else if(currentPerson.age > theOldest.age){
            theOldest = currentPerson;
        }
    });
    return theOldest;   
};

function makeNewObjectsWithAges(people){
    people.forEach( currentPerson => {
        currentPerson.age = calcAge(currentPerson);
    });
    return people;
}

function calcAge(currentPerson){
    if(!("yearOfDeath" in currentPerson)) return new Date().getFullYear() - currentPerson.yearOfBirth;
    return currentPerson.yearOfDeath - currentPerson.yearOfBirth; 
}

// Do not edit below this line
module.exports = findTheOldest;
