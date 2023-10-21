import signUpUser from './4-user-promise.js'
import uploadPhoto from './5-photo-reject.js'

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userSignup = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  const [signedUpUser, uploadedPhoto] = await Promise.allSettled([userSignup, photo]);
  return ([
    {
      status: signedUpUser.status,
      value: signedUpUser.status === 'fulfilled' ? signedUpUser.value : signedUpUser.reason,
    },
    {
      status: uploadedPhoto.status,
      value: uploadedPhoto.status === 'fulfilled' ? uploadedPhoto.value : uploadedPhoto.reason,
    },
  ])
}