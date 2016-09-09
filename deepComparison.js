function deepCompare(a,b){
    if ((typeof a == "object" && a != null) 
        && (typeof b == "object" && b != null)){
        if (Object.keys(a).length != Object.keys(b).length){
            return false;
        } else{
            for (var prop in a) {
                if (a.hasOwnProperty(prop)) {
                    if (!deepCompare(a[prop], b[prop])){
                        return false;
                    }                    
                } else {
                    return false;
                }
            }
        }

    } else {
        return a === b;
    }
    return true;
}

module.exports = {
    deepCompare
}