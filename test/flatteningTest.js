var expect = require('chai').expect;

var flattening = require('./../flattening');

describe('the flattener', function(){
    it('should flatten the object',function(){
        var actual = flattening.flatten([1,2,3],[4,5]);

        expect(actual).to.deep.eql([1,2,3,4,5]);
    })
})