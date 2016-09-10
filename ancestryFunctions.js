function motherChildAgeDifference(ancestryArray){

    var byName = {};
    ancestryArray.forEach(function(person) {
        byName[person.name] = person;
    });

    var peopleWithKnownMothers = ancestryArray.filter(function(person){
        return byName[person.mother];
    })

    var differences = peopleWithKnownMothers.map(function(person){
        return person.born - byName[person.mother].born;
    });

    return average(differences);
}

function ageOfDeathByCentury(ancestryArray){
    var centuryAverages = {};

    ancestryArray.forEach(function(person){
        var century = String(Math.ceil(person.died / 100));
        if (!centuryAverages[century]){
            centuryAverages[century] = [person.died - person.born];
        } else {
            centuryAverages[century].push(person.died - person.born);
        }
    })

    for(cent in centuryAverages){
        centuryAverages[cent] = average(centuryAverages[cent]);
    }
    return centuryAverages;
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}



module.exports = {
    motherChildAgeDifference,
    ageOfDeathByCentury
}