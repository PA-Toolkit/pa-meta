import { Serializable } from "pa-common";
import { MetadataParams } from "./MetadataParams";
import { Artist } from "./artist";
import { Beatmap } from "./beatmap";
import { Creator } from "./creator";
import { Song } from "./song";

/**
 * The metadata of the Project Arrhythmia level, the base of the library.
 */
export class Metadata implements Serializable {
  /**
   * The song's artist.
   */
  artist: Artist = new Artist();

  /**
   * The creator of the level.
   */
  creator: Creator = new Creator();

  /**
   * The song of the level, which also contains some of the information about the level itself.
   */
  song: Song = new Song();

  /**
   * The level's beatmap data.
   */
  beatmap: Beatmap = new Beatmap();

  fromJson(json: any) {
    if (json.artist) {
      this.artist.fromJson(json.artist);
    }
    if (json.creator) {
      this.creator.fromJson(json.creator);
    }
    if (json.song) {
      this.song.fromJson(json.song);
    }
    if (json.beatmap) {
      this.beatmap.fromJson(json.beatmap);
    }
  }

  toJson(): any {
    const json: { [key: string]: any } = {};
    if (this.artist) {
      json.artist = this.artist.toJson();
    }
    if (this.creator) {
      json.creator = this.creator.toJson();
    }
    if (this.song) {
      json.song = this.song.toJson();
    }
    if (this.beatmap) {
      json.beatmap = this.beatmap.toJson();
    }
    return json;
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }

  constructor(params?: MetadataParams) {
    if (params) {
      this.fromJson({
        artist: params.artist?.toJson(),
        creator: params.creator?.toJson(),
        song: params.song?.toJson(),
        beatmap: params.beatmap?.toJson(),
      });
    }
  }
}
