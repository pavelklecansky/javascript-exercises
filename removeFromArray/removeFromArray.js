const removeFromArray = function (array, ...remove) {
  for (let index = 0; index < remove.length; index++) {
    const element = remove[index];
    for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
      const indexOfRemove = array.indexOf(element);
      if (indexOfRemove === -1) {
          continue;
      }
      array.splice(indexOfRemove, 1);
    }
  }

  return array;
};

module.exports = removeFromArray;
