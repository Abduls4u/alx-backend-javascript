export default function cleanSet(set, startString) {
  const arr = [];
  if (!(typeof startString === 'string')) {
    return ('');
  }

  set.forEach((element) => {
    if (element && element.startsWith && element.startsWith(startString)) {
      const remainingPart = element.slice(startString.length);
      arr.push(remainingPart);
    }
  });
  const finalString = arr.join('-');
  return (finalString);
}
