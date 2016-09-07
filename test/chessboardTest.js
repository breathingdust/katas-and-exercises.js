var expect = require('chai').expect;

var chessboard = require('./../chessboard.js');

describe('The chessboard', function () {
  var actual;

  before(function() {
  	actual = chessboard.chessboard();
    //console.log(actual);
  });    

  it('character at the fourth position is black', function () {
	expect(actual.charAt(4)).to.eql(' ');
  })

  it('character at the eleventh position is black', function () {
	expect(actual.charAt(12)).to.eql('#');
  })
})  