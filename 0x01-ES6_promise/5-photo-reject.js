export default function uploadPhoto(filename) {
  const errrorMessage = new Error(`${filename} cannot be processed`);
  return (
    Promise.reject(errrorMessage)
  );
}
