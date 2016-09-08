function reverseInPlace(input){
    for(var i = 0;i < Math.floor(input.length / 2);i++){
        var temp = input[i];
        input[i] = input[input.length - 1 - i];
        input[input.length - 1 - i] = temp;
    }

    return input;
}

function reverse(input){
    var result = [];
    for(var i = input.length - 1;i >= 0;i--){
        result.push(input[i]);
    }
    return result;
}

module.exports = {
    reverse,
    reverseInPlace
}