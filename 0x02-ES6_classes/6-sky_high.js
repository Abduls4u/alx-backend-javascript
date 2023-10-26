/* eslint-disable no-underscore-dangle */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // floors getter and setter
  get floors() {
    return (this._floors);
  }

  // evacuationWarningMessage method
  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this._floors} floors`);
  }
}
