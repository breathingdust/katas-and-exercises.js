
function isEven(n){
    if (n == 0) return true;
    if (n == 1) return false;

    n = n -2;

    return isEven(n);
}

module.exports = {
    isEven
}