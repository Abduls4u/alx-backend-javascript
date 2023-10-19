import { uploadPhoto, createUser } from './utils';

const uPhoto = uploadPhoto();
const cUser = createUser();

export default function handleProfileSignup() {
  return Promise.all([cUser, uPhoto])
    .then((values) => {
    const user = values[0];
    const photo = values[1];
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => { console.log('Signup system offline'); })
}
