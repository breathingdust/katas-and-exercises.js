// var list = {
//   value: 5,
//   rest: {}
// }

function arrayToList(arr){
    var result = null;
    for(var i = arr.length -1;i >= 0;i--){
        result = { value: arr[i], rest: result};
    }
    return result;
}

function listToArray(list){
    var result = [];

    for(var node = list;node;node = node.rest){
        result.push(node.value);
    }
    return result;
}

function prepend(element, list){
    return {value:element,rest:list};
}

function nth(list, number){
    if (number === 0) 
        return list.value;
    else
        return nth(list.rest, number - 1);
}

module.exports = {
    arrayToList,
    listToArray,
    prepend,
    nth
}