import { Artist } from "./Artist";
import { ArtistConstructor } from "./ArtistConstructor";

export function CreateArtist(constructor: ArtistConstructor): Artist {
  return new Artist(constructor);
}
