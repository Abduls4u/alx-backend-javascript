/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    this._code = typeof code === 'string' ? code : (() => { throw new TypeError('code be a string'); })();
    this._name = typeof name === 'string' ? name : (() => { throw new TypeError('name must be a string'); })();
  }

  // code getter and setter
  get code() {
    return (this._code);
  }

  set code(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('code must be a string');
    }
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

  // displayFullCurrency method
  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
