export class LinkTypeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LinkTypeError";
  }
}
