var expect = require('chai').expect;

var list = require('./../list');

describe('a list', function(){
    it('should return a list generated from the array', function(){
        var actual = list.arrayToList([10,20,30]);

        var expected = {
            value: 10,
            rest : {
                value: 20,
                rest: {
                    value: 30,
                    rest: null
                }
            }
        };

        expect(actual).to.deep.eql(expected);
    })

    it('should return an array generated from the list', function(){
        var actual = list.listToArray({
            value: 10,
            rest : {
                value: 20,
                rest: {
                    value: 30,
                    rest: null
                }
            }
        });

        var expected = [10,20,30];

        expect(actual).to.deep.eql(expected);
    })    

    it('should prepend an element to a list', function(){
        var input = {
            value: 10,
            rest : {
                value: 20,
                rest: {
                    value: 30,
                    rest: null
                }
            }
        };

        var actual = list.prepend(0,input);

        var expected = {
            value: 0,
            rest: {
            value: 10,
                rest : {
                    value: 20,
                    rest: {
                        value: 30,
                        rest: null
                    }
                }
            }
        };

        expect(actual).to.deep.eql(expected);
    })    

    it('should return the nth element in the list', function(){
        var input = {
            value: 10,
            rest : {
                value: 20,
                rest: {
                    value: 30,
                    rest: null
                }
            }
        };

        var actual = list.nth(input,2);

        expect(actual).to.eql(30);
    })        
})