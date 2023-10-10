/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const tempArray = [];
  for (let keyVal of array) {
    tempArray.push(appendString + keyVal);
  }

  return tempArray;
}
