function flatten(args){
    args = Array.from(arguments);
    return args.reduce(function(a,b){
        return a.concat(b);
    })
}

module.exports = {
    flatten
}