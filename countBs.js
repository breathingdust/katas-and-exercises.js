function countBs(input){
    var result = 0;
    for (var index = 0; index < input.length; index++) {
        if (input[index] === 'B'){
            result++;
        }
    }
    return result;
}

function countChars(input, character){
    var result = 0;
    for (var index = 0; index < input.length; index++) {
        if (input[index] === character){
            result++;
        }
    }
    return result;
}

module.exports = {
    countBs,
    countChars
}