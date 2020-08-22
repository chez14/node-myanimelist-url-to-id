export default class InvalidUrl extends Error {
  constructor(m: string) {
    super(m);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, InvalidUrl.prototype);
  }
}
