import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userSignup = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  const [signedUpUser, uploadedPhoto] = await Promise.allSettled([userSignup, photo]);
  const arr = [
    {
      status: signedUpUser.status,
      value: signedUpUser.status === 'fulfilled' ? signedUpUser.value : signedUpUser.reason,
    },
    {
      status: uploadedPhoto.status,
      value: uploadedPhoto.status === 'fulfilled' ? uploadedPhoto.value : uploadedPhoto.reason,
    },
  ];
  return (arr);
}
