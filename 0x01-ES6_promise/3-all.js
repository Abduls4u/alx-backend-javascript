import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const uPhoto = uploadPhoto();
  const cUser = createUser();

  return Promise.all([cUser, uPhoto]).then((values) => {
    console.log(`${values[1].body} ${values[0].firstName} ${values[0].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
