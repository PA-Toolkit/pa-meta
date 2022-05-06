import { Artist } from "./Artist";
import { ArtistConstructor } from "./ArtistConstructor";

/**
 * Constructs a new Artist.
 * @param constructor A Artist constructor object.
 * @returns A new Artist.
 */
export function CreateArtist(constructor: ArtistConstructor): Artist {
  return new Artist(constructor);
}
