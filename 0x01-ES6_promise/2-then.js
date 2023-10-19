export default function handleResponseFromAPI(thePromise) {
  const obj = { body: 'Success', status: 200 };
  return thePromise
    .then(() => obj)
    .catch(() => Error())
    .finally(() => { console.log('Got a response from the API'); });
}
