export default function handleResponseFromAPI(thePromise) {
  const obj = { status: 200, body: 'Success' }
  return (
    thePromise
      .then(() => obj )
      .catch(() => Error())
      .finally(() => { console.log('Got a response from the API'); })
  );
}
