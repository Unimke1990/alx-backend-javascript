export default function appendToEachArrayValue(array, appendString) {
  const tempArray = [];

  for (const idx of array) {
    tempArray.push(appendString + idx);
  }

  return tempArray;
}
