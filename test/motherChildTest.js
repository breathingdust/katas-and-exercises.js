var expect = require('chai').expect;

var ancestryFile = require('./../ancestry');
var motherChild = require('./../motherChild');

describe('mother and child age difference', function(){
    var ancestry = JSON.parse(ancestryFile);
    it('should compute the average difference between mother and child', function(){
        var actual = motherChild.ageDifference(ancestry);

        expect(actual).to.be.closeTo(31.2,0.1);
    })
})