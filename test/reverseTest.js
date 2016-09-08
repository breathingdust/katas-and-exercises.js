var expect = require('chai').expect;

var reverse = require('./../reverse');

describe('the reverse class', function(){
    it('should reverse the array', function(){
        var actual = reverse.reverse([3,6,8,10]);

        expect(actual).to.deep.eql([10,8,6,3]);
    })

    it('should reverse the array in place', function(){
        var actual = reverse.reverseInPlace([3,6,8,10]);

        expect(actual).to.deep.eql([10,8,6,3]);
    })
})