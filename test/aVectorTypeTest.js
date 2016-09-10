var expect = require('chai').expect;

var Vector = require('./../aVectorType');

describe('a vector type', function(){
    it('should add vectors', function(){
        var vectorOne = new Vector(1,2);
        var vectorTwo = new Vector(2,3);

        vectorOne.plus(vectorTwo);

        expect(vectorOne.x).to.be.eql(3);
        expect(vectorOne.y).to.be.eql(5);
    })

    it('should subtract vectors', function(){
        var vectorOne = new Vector(1,2);
        var vectorTwo = new Vector(2,3);

        vectorOne.minus(vectorTwo);

        expect(vectorOne.x).to.be.eql(-1);
        expect(vectorOne.y).to.be.eql(-1);
    })
})