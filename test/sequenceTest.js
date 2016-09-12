var expect = require('chai').expect;

var ArraySequence = require('./../sequence').arraySequence;
var RangeSequence = require('./../sequence').rangeSequence;

function logFive(sequence){
    for(var i = 0;i < 5;i++){
        if (!sequence.next()){
            break;
        }
        console.log(sequence.current());
    }
}

describe('the sequence objects', function(){
    it('should output the first 5 elements of the array', function(){
        var arraySequence = new ArraySequence([1,4,7,8]);

        logFive(arraySequence);
    })

    it('should output the first 5 elements of the range', function(){
        var rangeSequence = new RangeSequence(1,7);

        logFive(rangeSequence);
    })    
})