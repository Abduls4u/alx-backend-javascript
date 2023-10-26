/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = typeof amount === 'number' ? amount : (() => { throw new TypeError('number must be a number'); })();
    this._currency = currency;
  }

  // amount getter and setter
  get amount() {
    return (this._amount);
  }

  set amount(value) {
    this._amount = value;
  }

  // currency gettr and setter
  get currency() {
    return (this._currency);
  }

  set currency(value) {
    // eslint-disable-next-line no-param-reassign
    value = new Currency();
    this._currency = value;
  }

  // displayFullPrice method
  displayFullPrice() {
    return (`${this._amount} ${this._currency.name} (${this._currency.code})`);
  }

  // convertPrice method
  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
