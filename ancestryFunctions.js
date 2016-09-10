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
    var groupedPeople = groupBy(ancestryArray, computeCentury);
    for(century in groupedPeople){
        groupedPeople[century] = average(groupedPeople[century].map(computeAge));
    }
    return groupedPeople;
}

function computeAge(person){
    return person.died - person.born;
}

function computeCentury(person){
    return String(Math.ceil(person.died / 100));
}

function groupBy(array, group){
    var grouped = {};

    array.forEach(function(groupMember){
        var computedGroup = group(groupMember);
        if (!grouped[computedGroup]){
            grouped[computedGroup] = [];
        }
        grouped[computedGroup].push(groupMember);
    })
    return grouped;
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}



module.exports = {
    motherChildAgeDifference,
    ageOfDeathByCentury
}