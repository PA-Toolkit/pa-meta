export class DifficultyParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DifficultyParseError";
  }
}
