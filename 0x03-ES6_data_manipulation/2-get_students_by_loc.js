export default function getStudentsByLocation(arr, city) {
  if (!Array.isArray(arr)) {
    return ([]);
  }
  // eslint-disable-next-line array-callback-return, consistent-return
  return (arr.filter((item) => {
    if (item.location === city) {
      return (item);
    }
  }));
}
