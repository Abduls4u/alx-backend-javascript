export default function cleanSet(set, startString) {
  const arr = [];

  set.forEach((element) => {
    if (element.startsWith(startString)) {
      const remainingPart = element.slice(startString.length);
      arr.push(remainingPart);
    }
  });
  return (arr.join('-'));
}
