import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [];
  for (const value of [19, 20, 34]) {
    const room = new ClassRoom(value);
    arr.push(room);
  }
  return (arr);
}
