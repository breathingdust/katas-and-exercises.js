function ageDifference(ancestryArray){

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

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}



module.exports = {
    ageDifference
}