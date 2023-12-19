import { Artist, ArtistParams } from "./artist";
import { Beatmap, BeatmapConstructor } from "./beatmap";
import { Creator, CreatorParams } from "./creator";
import { Song, SongConstructor } from "./song";

/**
 * A Metadata constructor object.
 */
export interface MetadataConstructor {
  artist?: Artist | ArtistParams;
  creator?: Creator | CreatorParams;
  song?: Song | SongConstructor;
  beatmap?: Beatmap | BeatmapConstructor;
}
