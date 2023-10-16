/* eslint-disable no-console */
export default function handleResponseFromAPI(thePromise) {
  return (
    thePromise
      .then(() => ({ status: 200, body: 'Success' }))
      .catch(() => new Error())
      .finally(() => { console.log('Got a response from the API'); })
  );
}
