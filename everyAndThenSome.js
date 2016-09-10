function every(array, where){
    array.forEach(function(element){
        if (!where(element)){
            return false;
        }
    })
    return true;
}

function some(array, where){
    array.forEach(function(element){
        if (where(element)){
            return true;
        }
    })
    return false;
}

module.exports = {
    every,
    some
}