export class BeatmapParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BeatmapParseError";
  }
}

export class DateParseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DateParseError";
  }
}
