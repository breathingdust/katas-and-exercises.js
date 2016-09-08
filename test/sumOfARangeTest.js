var expect = require('chai').expect;

var sumOfARange = require('./../sumOfARange');

describe('the sum of a range', function(){
    it('should compute the sum of a range', function(){
        var actual = sumOfARange.sum(3,13);

        expect(actual).to.eql(88);
    })

    it('should return an array computed from the range', function(){
        var actual = sumOfARange.range(3,14);

        expect(actual).to.deep.equal([3,4,5,6,7,8,9,10,11,12,13,14]);
    })
})