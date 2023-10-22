/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // name getter and setter
  get name() {
    return (this._name);
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('name must be a string');
    }
  }

  // length getter and setter
  get length() {
    return (this._length);
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('length must be a number');
    }
  }

  // students getter and setter
  get students() {
    return this._students;
  }

  set students(value) {
    if (value.every((student) => typeof student === 'string')) {
      this._students = value;
    } else {
      throw new TypeError('students must be an array of strings');
    }
  }
}
