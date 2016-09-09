var expect = require('chai').expect;

var deepCompare = require('./../deepComparison.js');

describe('the deep comparison function', function(){
    var obj = null;
    before(function(){
        obj = {here: {is: "an"}, object: 2};
    })

    it('should be true when objects are the same', function(){
        var actual = deepCompare.deepCompare(obj, obj);

        expect(actual).to.be.true;
    })

    it('should be false when objects are not equal', function(){
        var actual = deepCompare.deepCompare(obj, {here: {}});

        expect(actual).to.be.false;
    })

    it('should be true when objects are equal', function(){
        var actual = deepCompare.deepCompare(obj, {here: {is: "an"}, object: 2});

        expect(actual).to.be.true;
    })

})