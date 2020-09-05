const getTheTitles = function (array) {
    const newArray = array.map((value) => value.title);
    return newArray;
}

module.exports = getTheTitles;
