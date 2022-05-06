export class CreatorParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CreatorParseError";
  }
}
