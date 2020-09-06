let findTheOldest = function (array) {
    let oldest = array[0];
    array.forEach(person => {
        //Zjištuje se jestli človek ještě žije nebo ne
        let personAge;
        if (("yearOfDeath" in person)) {
            personAge = person.yearOfDeath - person.yearOfBirth;
        } else {
            personAge = (new Date()).getFullYear() - person.yearOfBirth;
        }

        let oldestAge;
        if (("yearOfDeath" in oldest)) {
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        } else {
            oldestAge = (new Date()).getFullYear() - oldest.yearOfBirth;
        }

        if (personAge > oldestAge) {
            oldest = person;
        }
    });
    return oldest;
}

const people = [
    {
        name: 'Carly',
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011
    },
    {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941
    },
]
console.log(findTheOldest(people));
module.exports = findTheOldest
