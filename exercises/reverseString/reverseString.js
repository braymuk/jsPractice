const reverseString = function(string) {
    let array = string.split("");
    let rev = array.reverse();
    console.log(rev)
    let commas = rev.join("");
    console.log(commas);
    return commas;

}

module.exports = reverseString
