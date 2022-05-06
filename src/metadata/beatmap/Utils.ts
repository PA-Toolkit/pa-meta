import { DateParseError } from "./Errors";

function parseDateString(date: string): Date {
  const regex = /^(\d{4})-(\d{2})-(\d{2})_(\d{2}).(\d{2}).(\d{2})$/;
  const match = date.match(regex);
  if (!match) {
    throw new DateParseError(`Unable to parse date string: ${date}`);
  }
  const [, year, month, day, hour, minute, second] = match;
  return new Date(
    parseInt(year),
    parseInt(month),
    parseInt(day),
    parseInt(hour),
    parseInt(minute),
    parseInt(second)
  );
}

function dateToString(date: number | Date): string {
  if (typeof date === "number") {
    date = new Date(date);
  }
  return [
    date.getFullYear().toString().padStart(4, "0"),
    "-",
    (date.getMonth() + 1).toString().padStart(2, "0"),
    "-",
    date.getDate().toString().padStart(2, "0"),
    "_",
    date.getHours().toString().padStart(2, "0"),
    ".",
    date.getMinutes().toString().padStart(2, "0"),
    ".",
    date.getSeconds().toString().padStart(2, "0"),
  ].join("");
}

/**
 * Beatmap utils.
 */
export interface BeatmapUtils {
  /**
   * Parses a date.
   * @param date The date string to parse.
   * @returns The parsed date.
   */
  parseDateString(date: string): Date;

  /**
   * Converts a date to string.
   * @param date The date to convert.
   * @returns The date as string.
   */
  dateToString(date: number | Date): string;
}

export const BeatmapUtils: BeatmapUtils = {
  parseDateString,
  dateToString,
};
