// var list = {
//   value: 5,
//   rest: {}
// }

function arrayToList(arr){
    var result = null;
    for(var i = arr.length -1;i >= 0;i++){
        result = { value: i, rest: result};
    }
    return result;
}

function listToArray(list){

}

function prepend(element, list){

}

function nth(list, number){

}

module.exports = {
    arrayToList,
    listToArray,
    prepend,
    nth
}