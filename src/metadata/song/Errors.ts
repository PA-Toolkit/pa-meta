export class DifficultyParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DifficultyParseError";
  }
}

export class SongParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SongParseError";
  }
}
