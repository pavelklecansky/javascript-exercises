const reverseString = function(string) {
    let reverse = "";
    for (let index = string.length-1; index >= 0; index--) {
        reverse += string.charAt(index);
    }
    return reverse;
}


module.exports = reverseString
