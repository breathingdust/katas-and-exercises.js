var expect = require('chai').expect;

var isEven = require('./../isEven');

describe('the is even method', function(){
    it('should be true when number is even', function(){
        var actual = isEven.isEven(4);

        expect(actual).to.be.true;
    })

    it('should be false when number is odd', function(){
        var actual = isEven.isEven(5);

        expect(actual).to.be.false;
    })
})