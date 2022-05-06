import { Song } from "./Song";
import { SongConstructor } from "./SongConstructor";

/**
 * Constructs a new Song.
 * @returns A new Song.
 */
export function CreateSong();
/**
 * Constructs a new Song.
 * @param constructor A Song constructor object.
 * @returns A new Song.
 */
export function CreateSong(constructor: SongConstructor);
export function CreateSong(constructor?: SongConstructor): Song {
  return new Song(constructor || {});
}
