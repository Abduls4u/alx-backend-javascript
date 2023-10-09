/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
export default function returnHowManyArguments(...args) {
  let argCount = 0;
  for (const arg of args) {
    argCount += 1;
  }
  return (argCount);
}
