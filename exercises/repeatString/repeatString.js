const repeatString = function(string,n) {
    for(i=0;i<=n;i++) {
        return string.repeat(n);
    } if(n<0) {
        return "ERROR";
    }
}

module.exports = repeatString