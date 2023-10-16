export default function handleResponseFromAPI(thePromise) {
  return (
    thePromise
      .then(() => ({ status: 200, body: 'Success' }))
      .catch(() => Error())
      .finally(() => { console.log('Got a response from the API'); })
  );
}
