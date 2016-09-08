var expect = require('chai').expect;

var list = require('./../list');

describe('a list', function(){
    it('should return a list generated from the array', function(){
        var actual = list.arrayToList([3,5,7]);

        var expected = {
            value: 7,
            rest : {
                value: 5,
                rest: {
                    value: 3,
                    rest: null
                }
            }
        };

        expect(actual).to.deep.eql(expected);
    })
})