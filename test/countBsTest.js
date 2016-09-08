var expect = require('chai').expect;

var countBs = require('./../countBs');

describe('countBs', function(){
    it('should count the number of uppercase Bs', function(){
        var actual = countBs.countBs('aBnhyBbbBBh');

        expect(actual).to.eql(4);
    })

    it('should count the number of a specified character',function(){
        var actual = countBs.countChars('JvifkVjv','v');

        expect(actual).to.eql(2);
    })
})