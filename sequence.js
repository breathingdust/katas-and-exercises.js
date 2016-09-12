

function ArraySequence(array){
    this.array = array;
    this.position = -1;
}
ArraySequence.prototype.next = function(){
    if (this.position >= this.array.length -1){
        return false;
    }
    this.position++;
    return true;
}
ArraySequence.prototype.current = function(){
    return this.array[this.position];
}

function RangeSequence(from, to){
    this.to = to;
    this.position = from - 1;
}
RangeSequence.prototype.next = function(){
    if (this.position >= this.to){
        return false;
    }
    this.position++;
    return true;
}
RangeSequence.prototype.current = function(){
    return this.position;
}

module.exports.arraySequence = ArraySequence;
module.exports.rangeSequence = RangeSequence;