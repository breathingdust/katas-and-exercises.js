var expect = require('chai').expect;

var everyAndThenSome = require('./../everyAndThenSome');

describe('every and then some', function(){

    it('should return true when every element isNaN', function(){
        var actual = everyAndThenSome.every([NaN, NaN, NaN], isNaN);

        expect(actual).to.be.true;
    })

    it('should return false when every element is not NaN', function(){
        var actual = everyAndThenSome.every([NaN, NaN, 4], isNaN);

        expect(actual).to.be.true;
    })
})