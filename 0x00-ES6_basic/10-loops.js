/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  for (let keys of array.entries()) {
    array[keys[0]] = appendString + keys[1];
  }

  return array;
}
