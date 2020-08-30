const repeatString = function(string,numberOfTimes) {
    if (numberOfTimes < 0) {
        return "ERROR";
    }
    let newString = "";
    for (let index = 0; index < numberOfTimes; index++) {
        newString += string;
    }
    return newString;
}

module.exports = repeatString
