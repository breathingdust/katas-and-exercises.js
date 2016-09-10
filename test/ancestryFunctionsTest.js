var expect = require('chai').expect;

var ancestryFile = require('./../ancestry');
var ancestryFunctions = require('./../ancestryFunctions');

describe('then functions for the ancestry data set', function(){
    var ancestry = JSON.parse(ancestryFile);
    it('should compute the average difference between mother and child', function(){
        var actual = ancestryFunctions.motherChildAgeDifference(ancestry);

        expect(actual).to.be.closeTo(31.2,0.1);
    })

    it('should group by century and compute average age of death',function(){
        var actual = ancestryFunctions.ageOfDeathByCentury(ancestry);

        expect(actual[16]).to.be.eql(43.5);
    })
})