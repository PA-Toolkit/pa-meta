import { Artist } from "./artist";
import { Beatmap } from "./beatmap";
import { Creator } from "./creator";
import { Song } from "./song";

/**
 * A Metadata constructor object.
 */
export interface MetadataParams {
  artist?: Artist;
  creator?: Creator;
  song?: Song;
  beatmap?: Beatmap;
}
