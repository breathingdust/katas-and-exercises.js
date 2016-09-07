var expect = require('chai').expect;

var fizzBuzz = require('./../fizzBuzz.js');

describe('The fizzbuzz method', function () {  
  var actual;

  before(function() {
  	actual = fizzBuzz.fizzbuzz();
  });

  it('returns an array with 100 numbers', function () {
	expect(actual.length).to.eql(100);
  })

  it('number divisible by 5 and 3 is fizzbuzz', function () {
	expect(actual[15 -1]).to.eql('FizzBuzz');
  })

  it('number divisible by 5 is buzz', function () {
	expect(actual[5 -1]).to.eql('Buzz');
  })

   it('number divisible by 3 is Fizz', function () {
 	expect(actual[12 -1]).to.eql('Fizz');
   })
})