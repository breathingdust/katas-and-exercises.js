function range (start, end){
    var result = [];

    for(var i = start;i <= end;i++){
        result.push(i);
    }
    return result;
}

function sum(start, end){
    var rangeResult = range(start, end);
    var result = 0;
    for(var i = 0;i <= rangeResult.length - 1;i++){
        result += rangeResult[i];
    }
    
    return result;
}

module.exports = {
    range,
    sum
}