var expect = require('chai').expect;

var TextCell = require('./../stretchCell').textCell;
var StretchCell = require('./../stretchCell').stretchCell;

describe('the stretch cell', function(){
    var stretchCell;
    before(function(){
        stretchCell = new StretchCell(new TextCell("abc"), 1, 2);
    })

    it('should stretch the width', function(){
        expect(stretchCell.minWidth()).to.eql(3);
    })

    it('should stretch the height', function(){
        expect(stretchCell.minHeight()).to.eql(2);
    })

    it('should stretch the output', function(){
        expect(stretchCell.draw(3,2)).to.eql(["abc", "   "]);
    })
})